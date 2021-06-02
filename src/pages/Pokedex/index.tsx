import React, { useState } from 'react';
import { A } from 'hookrouter';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import s from './Pokedex.module.scss';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import useDebounce from '../../hook/useDebounce';
import useData from '../../hook/useData';
import { IPokemons, IPokemon } from '../../interface/pokemons';
import { LinkEnum } from '../../routes';
import Filter from '../../components/Filter';
import FILTERS from './filters';

const LIMIT = 12;

interface IQuery {
  name?: string;
  limit?: number | string;
  offset?: number | string;
  types?: (string | number)[];
  [key: string]: any;
}

interface IFilter {
  types?: (string | number)[];
  [key: string]: any;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: LIMIT });
  const [filter, setFilter] = useState<IFilter>();
  const [offset, setOffset] = useState<number>(0);

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue, filter, offset]);

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setQuery((state: IQuery) => ({
      ...state,
      name: value,
    }));
  };

  const handlePaginationClick = async (index: number) => {
    const newOffset = index * LIMIT;
    setQuery((state: IQuery) => ({
      ...state,
      offset: newOffset,
    }));
    setOffset(newOffset);
  };

  const handleFilterClick = (filterName: string, id: string | number) => {
    const filtersArray = getFiltersArray(filterName, id);

    const newQuery = { ...query };
    if (!filtersArray.length) {
      delete newQuery[filterName];
    } else {
      newQuery[filterName] = filtersArray;
    }

    setQuery(newQuery);
    setFilter({
      [filterName]: filtersArray,
    });
  };

  const getFiltersArray = (filterName: string, value: string | number) => {
    if (filter && filter[filterName]) {
      const filtersArray = [...filter[filterName]];
      const valueIndex = filtersArray.indexOf(value);
      if (valueIndex > -1) {
        filtersArray.splice(valueIndex, 1);
      } else {
        filtersArray.push(value);
      }
      return filtersArray;
    }
    return [value];
  };

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Heading tag="h3" className={s.title}>
          {!isLoading && data && data.total} <span>Pokemons</span> for you to choose your favorite
        </Heading>
        <div className={s.searchWrap}>
          <Search placeholder="Encuentra tu pokémon..." onChange={handleSearchChange} />
        </div>
        <div className={s.filtersWrap}>
          <Filter filterName="Type" filters={FILTERS.TYPES} onClick={(id) => handleFilterClick('types', id)} />
        </div>
        <div className={s.pokemonsWrap}>
          {!isLoading &&
            data &&
            data.pokemons.map((pokemon: IPokemon) => {
              return (
                <A href={`${LinkEnum.POKEDEX}/${pokemon.id}`} key={pokemon.id}>
                  <PokemonCard
                    pokemonName={pokemon.name}
                    stat={pokemon.stats}
                    types={pokemon.types}
                    imgUrl={pokemon.img}
                  />
                </A>
              );
            })}
          <Pagination length={data ? Math.ceil(data.total / data.count) : 0} onClick={handlePaginationClick} />
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;

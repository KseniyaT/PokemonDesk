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

const LIMIT = 12;

interface IQuery {
  name?: string;
  limit?: number | string;
  offset?: number | string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: LIMIT });

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setQuery((state: IQuery) => ({
      ...state,
      name: value,
    }));
  };

  const handleClick = async (index: number) => {
    console.log('Pagination was clicked, index', index);
    // @TODO: add request with offset = index * LIMIT, limit = LIMIT
  };

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Heading tag="h3" className={s.title}>
          {!isLoading && data && data.total} <span>Pokemons</span> for you to choose your favorite
        </Heading>
        <div className={s.searchWrap}>
          <Search placeholder="Encuentra tu pokémon..." onChange={handleSearchChange} />
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
          <Pagination length={data ? Math.ceil(data.total / data.count) : 0} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;

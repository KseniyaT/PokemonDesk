import React, { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import s from './Pokedex.module.scss';
import req from '../../utils/request';
import Pagination from '../../components/Pagination';
import getQuery from '../../utils/getQueryParams';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  name_clean: string; // eslint-disable-line camelcase
  abilities?: string[];
  stats: IStats;
  types: [];
  img: string;
  name: string;
  base_experience?: number; // eslint-disable-line camelcase
  height?: number;
  id: number;
  is_default?: boolean; // eslint-disable-line camelcase
  order?: number;
  weight?: number;
}

interface IData {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
  total: number;
}

const LIMIT = 9;

const usePokemons = (offset: number = 0, limit: number = LIMIT) => {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const query = getQuery({ offset, limit });
        const result = await req('getPokemons', { search: `${query}` });
        setData(result);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  const handleClick = async (index: number) => {
    console.log('Pagination was clicked, index', index);
    // @TODO: add request with offset = index * LIMIT, limit = LIMIT
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        {data && (
          <>
            <Heading tag="h3" className={s.title}>
              {data.total} <span>Pokemons</span> for you to choose your favorite
            </Heading>
            <div className={s.pokemonsWrap}>
              {data.pokemons.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.id}
                    pokemonName={pokemon.name}
                    stat={pokemon.stats}
                    types={pokemon.types}
                    imgUrl={pokemon.img}
                  />
                );
              })}
              <Pagination length={Math.ceil(data.total / data.count)} onClick={handleClick} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokedexPage;

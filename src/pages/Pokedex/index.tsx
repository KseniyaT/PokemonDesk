import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import s from './Pokedex.module.scss';
import pokemons from './data';

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
  pokemonList: IPokemon[];
  error: boolean;
  loading: boolean;
}

function imitateAjaxRequest(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pokemons);
    }, 2000);
  });
}

const getPokemons = async () => {
  return imitateAjaxRequest();
};

const Pokedex = () => {
  const [data, setData] = useState<IData>({
    pokemonList: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    getPokemons()
      .then((response) => {
        setData({
          pokemonList: response,
          error: false,
          loading: false,
        });
      })
      .catch(() => {
        setData({
          pokemonList: [],
          error: true,
          loading: false,
        });
      });
  }, []);

  return (
    <div className={s.root}>
      <Header />
      {data.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.error ? (
            <div>Something went wrong</div>
          ) : (
            <div className={s.wrap}>
              <Heading tag="h3" className={s.title}>
                {data.pokemonList.length} <span>Pokemons</span> for you to choose your favorite
              </Heading>
              <div className={s.pokemonsWrap}>
                {data.pokemonList.map((pokemon) => {
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
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pokedex;

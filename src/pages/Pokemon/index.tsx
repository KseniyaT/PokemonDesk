import React from 'react';
import cn from 'classnames';
import useData from '../../hook/useData';
import { IPokemon } from '../../interface/pokemons';
import s from './Pokemon.module.scss';
import Heading from '../../components/Heading';

export interface PokemonProps {
  id: number | string;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemon>('getPokemon', { pathend: id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  let abilities;
  if (data) {
    abilities =
      data.abilities &&
      data.abilities.reduce((previousValue, currentValue) => {
        return `${previousValue}-${currentValue}`;
      });
  }

  return (
    <>
      {data && (
        <div className={s.overlap}>
          <div className={s.root}>
            <div className={s.avatar}>
              <img src={data.img} className={s.img} />
              <div className={s.types}>
                {data.types.slice(0, 2).map((type) => {
                  return (
                    <span className={s.type} key={type}>
                      {type}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={s.info}>
              <div className={s.header}>
                <Heading tag="h3" className={s.title}>
                  {data.name}
                </Heading>
                <Heading tag="h4" className={s.subtitle}>
                  Generation 1
                </Heading>
                <div className={s.rating}>{data.base_experience}</div>
              </div>
              <div className={s.box}>
                <div>
                  <Heading className={s.text}>Abilities</Heading>
                  <Heading className={s.text}>{abilities}</Heading>
                </div>
              </div>
              <div className={s.box}>
                <div className={s.skills}>
                  <Heading className={s.text}>Healthy Points</Heading>
                  <Heading className={cn(s.text, s.bold)}>1000000</Heading>
                  <div className={cn(s.progress, s['progress--healthy'])} />
                </div>
                <div className={s.skills}>
                  <Heading className={s.text}>Experience</Heading>
                  <Heading className={cn(s.text, s.bold)}>1000000</Heading>
                  <div className={cn(s.progress, s['progress--experience'])} />
                </div>
              </div>
              <div className={s.footer}>
                <div className={s.stats}>
                  <div className={s['stats-value']}>{data.stats.defense ? data.stats.defense : 'n/a'}</div>
                  <div className={s['stats-name']}>Defense</div>
                </div>
                <div className={s.stats}>
                  <div className={s['stats-value']}>{data.stats.attack ? data.stats.attack : 'n/a'}</div>
                  <div className={s['stats-name']}>Attack</div>
                </div>
                <div className={s.stats}>
                  <div className={s['stats-value']}>
                    {data.stats['special-attack'] ? data.stats['special-attack'] : 'n/a'}
                  </div>
                  <div className={s['stats-name']}>Sp Attack</div>
                </div>
                <div className={s.stats}>
                  <div className={s['stats-value']}>
                    {data.stats['special-defense'] ? data.stats['special-defense'] : 'n/a'}
                  </div>
                  <div className={s['stats-name']}>Sp Defense</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonPage;

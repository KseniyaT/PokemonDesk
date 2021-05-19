import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IStat {
  attack: number;
  defense: number;
}

interface PokemonCardProps {
  pokemonName: string;
  stat: IStat;
  types: string[];
  imgUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonName, stat, types, imgUrl }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading className={s.titleName}>{pokemonName}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stat?.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stat?.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => {
            return (
              <span key={type} className={s.label}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={imgUrl} alt={pokemonName} />
      </div>
    </div>
  );
};

export default PokemonCard;

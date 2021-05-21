import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assests/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          <ul className={s.menuNav}>
            {MENU.map(({ value, link, id }) => {
              return (
                <li key={id}>
                  <a href={link} className={s.menuLink}>
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

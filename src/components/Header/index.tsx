import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import { GENERAL_MENU } from '../../routes';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assests/Logo.svg';

const Header = () => {
  const path = usePath();
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          <ul className={s.menuNav}>
            {GENERAL_MENU.map(({ title, link }) => {
              return (
                <li key={title}>
                  <A href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
                    {title}
                  </A>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);

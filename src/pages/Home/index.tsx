import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ['button-schema']?: string;
    ['button-size']?: string;
    ['tag-variant']?: string;
  }
}

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h2" className={s.heading}>
            <b>Find</b> all your{' '}
            <span>
              favorite <b>Pokemon</b>
            </span>
          </Heading>
          <Heading tag="h3" className={s.subheading}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => console.log('Button clicked!')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;

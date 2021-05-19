import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Heading from '../../components/Heading';
import TeamRocket from './assets/TeamRocket.png';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Heading className={s.text}>404</Heading>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <Heading className={s.subtitle}>
            <span>The rocket team</span> has won this time.
          </Heading>
          <Button schema="yellow" onClick={() => navigate(LinkEnum.HOME)} className={s.button}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

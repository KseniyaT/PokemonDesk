import React from 'react';
import s from './Pagination.module.scss';

interface CompProps {
  length: number;
  onClick: (index: number) => void;
}

const Pagination: React.FC<CompProps> = ({ length, onClick }) => {
  const dots = [];
  for (let index = 0; index < length; index += 1) {
    dots.push(
      <li key={index}>
        <button type="button" className={s.dot} onClick={() => onClick(index)} />
      </li>,
    );
  }

  if (!dots.length) {
    return null;
  }

  return <ul className={s.root}>{dots}</ul>;
};

export default Pagination;

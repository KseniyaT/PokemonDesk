import React, { useState } from 'react';
import cn from 'classnames';
import s from './Filter.module.scss';
import FilterElement from './FilterElement';
import toCapitalizeFirstLetter from '../../utils/utils';

interface FilterProps {
  filterName: string;
  filters?: string[] | null;
  onClick: (id: string | number) => void;
}

const Filter: React.FC<FilterProps> = ({ filterName, filters = [], onClick }) => {
  const [show, setShow] = useState(false);

  const handleTitleClick = () => {
    setShow(!show);
  };
  const handleFilterClick = (id: string | number) => {
    onClick && onClick(id);
  };
  return (
    <div className={s.container}>
      <div className={s.title} onClick={handleTitleClick} onKeyPress={handleTitleClick} role="button" tabIndex={0}>
        {filterName}
      </div>
      <ul className={cn(s.filters, { [s.hidden]: !show })}>
        {filters &&
          filters.map((filter: string) => {
            return (
              <li key={filter}>
                <FilterElement
                  id={filter}
                  name={toCapitalizeFirstLetter(filter)}
                  onClick={() => handleFilterClick(filter)}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Filter;

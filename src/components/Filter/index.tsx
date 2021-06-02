import React, { useState } from 'react';
import cn from 'classnames';
import s from './Filter.module.scss';
import FilterElement from './FilterElement';

interface FilterProps {
  filterName: string;
  filters?: IFilter[];
  onClick: (id: string | number) => void;
}

interface IFilter {
  id: string | number;
  name?: string;
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
        {filters.map((filter: IFilter) => {
          return (
            <li key={filter.id}>
              <FilterElement id={filter.id} name={filter.name} onClick={() => handleFilterClick(filter.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;

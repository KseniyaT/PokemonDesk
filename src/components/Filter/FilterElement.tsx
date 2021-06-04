import React, { useState } from 'react';
import cn from 'classnames';
import s from './Filter.module.scss';

interface FilterElementProps {
  id: string | number;
  name?: string;
  onClick: () => void;
}

const FilterElement: React.FC<FilterElementProps> = ({ id, name = '', onClick }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    setChecked(!checked);
    onClick && onClick();
  };
  return (
    <a
      onClick={handleClick}
      onKeyPress={handleClick}
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      className={cn(s.filter, { [s.checked]: checked })}>
      {name}
    </a>
  );
};

export default FilterElement;

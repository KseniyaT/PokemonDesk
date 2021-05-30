import React, { useState } from 'react';
import cn from 'classnames';
import s from './Search.module.scss';

interface ButtonProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Search: React.FC<ButtonProps> = ({ className, onChange, placeholder }) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <input
      className={cn(s.search, className)}
      type="text"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Search;

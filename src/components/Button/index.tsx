import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  schema?: 'blue' | 'green';
  size?: 'small' | 'regular';
}

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  schema = 'green',
  size = 'regular',
  onClick,
}) => {
  return (
    <button
      className={cn(s.root, { [`${s['root--full']}`]: fullWidth })}
      type="button"
      onClick={onClick}
      button-schema={schema}
      button-size={size}>
      {children}
    </button>
  );
};

export default Button;

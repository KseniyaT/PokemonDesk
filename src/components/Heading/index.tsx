import React, { ComponentType } from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface CompProps {
  tag: ComponentType | keyof JSX.IntrinsicElements;
  variant?: string;
}

const Heading: React.FunctionComponent<CompProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag: Tag = 'p',
  className,
  children,
  variant,
  ...rest
}) => {
  return (
    <Tag className={cn(s.root, className)} tag-variant={variant} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;

import React, { ReactElement } from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

interface LayoutProps {
  children: ReactElement | ReactElement[];
  className: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => <div className={cn(s.root, className)}>{children}</div>;

export default Layout;

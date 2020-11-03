import { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './Layout.module.css';

interface Props {
  className?: string;
  children: ReactNode | any;
}

const Layout: FC<Props> = ({ children, className = '' }: Props) => {
  return <main className={cn(s.root, className)}>{children}</main>;
};

export default Layout;

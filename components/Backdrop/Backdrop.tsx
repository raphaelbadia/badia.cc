import { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './Backdrop.module.css';

interface Props {
  className?: string;
  children: ReactNode | any;
}

const Backdrop: FC<Props> = ({ children, className = '' }: Props) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

export default Backdrop;

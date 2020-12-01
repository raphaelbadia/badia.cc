import { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './Block.module.css';

interface Props {
  className?: string;
  children: ReactNode | any;
  gridArea?: string;
}

const Block: FC<Props> = ({ children, className = '', gridArea }: Props) => {
  return (
    <div className={cn(s.root, className)} style={{ gridArea }}>
      {children}
    </div>
  );
};

export default Block;

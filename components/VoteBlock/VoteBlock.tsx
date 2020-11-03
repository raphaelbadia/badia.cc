import { CSSProperties, FC, ReactNode } from 'react';
import s from './VoteBlock.module.css';

interface Props {
  children: ReactNode | any;
  style?: CSSProperties;
}

const VoteBlock: FC<Props> = ({ children, style }: Props) => {
  return (
    <div className={s.root} style={style}>
      {children}
    </div>
  );
};

export default VoteBlock;

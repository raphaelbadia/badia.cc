import { FC } from 'react';
import s from './Avatar.module.css';

interface Props {
  url: string;
}

const Avatar: FC<Props> = ({ url }: Props) => {
  return (
    <div className={s.root}>
      <img alt="A cat" className={s.image} src={url} />
    </div>
  );
};

export default Avatar;

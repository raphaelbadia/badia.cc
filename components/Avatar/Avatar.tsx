import { FC } from 'react';
import { Clickable } from 'reakit/Clickable';
import s from './Avatar.module.css';

interface Props {
  url: string;
  onClick?: () => void;
}

const Avatar: FC<Props> = ({ url, onClick = () => null }: Props) => {
  return (
    <Clickable as="div" onClick={onClick} className={s.root}>
      <img alt="A cat" className={s.image} src={url} draggable={false} />
    </Clickable>
  );
};

export default Avatar;

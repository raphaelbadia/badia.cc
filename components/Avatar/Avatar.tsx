import { FC, useEffect, useState } from 'react';
import { Clickable } from 'reakit/Clickable';
import useTimeout from '@rooks/use-timeout';
import s from './Avatar.module.css';

interface Props {
  url: string;
  onClick?: () => void;
}

const Avatar: FC<Props> = ({ url, onClick = () => null }: Props) => {
  const [opacity, setOpacity] = useState(0);
  const { start } = useTimeout(() => {
    setOpacity(1);
  }, 500);
  useEffect(() => {
    start();
  }, [url, start]);

  return (
    <Clickable
      as="div"
      onClick={onClick}
      className={s.root}
      style={{ opacity }}
    >
      <img
        alt="A cat"
        className={s.image}
        src={url}
        width={500}
        height={500}
        draggable={false}
      />
    </Clickable>
  );
};

export default Avatar;

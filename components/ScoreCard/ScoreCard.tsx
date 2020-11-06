import { FC } from 'react';
import s from './ScoreCard.module.css';

interface Props {
  rank: number;
  cat: {
    url: string;
    name: string;
    vote: number;
    elo: number;
  };
}

const ScoreImage: FC<Props> = ({ cat, rank }: Props) => {
  return (
    <div className={s.card}>
      <img src={cat.url} alt={`${cat.name}'s face`} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>
          #{rank} - {cat.name}
        </h3>
        <p className={s.subtitle}>
          <span className="font-bold">{cat.vote}</span> votes
        </p>
        <p className={s.subtitle}>
          Elo: <span className="font-bold">{cat.elo}</span>
        </p>
      </div>
    </div>
  );
};

export default ScoreImage;

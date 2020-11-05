import Link from '../Link/Link';
import s from './LinkToScoreboard.module.css';

const LinkToScoreboard: React.FC = () => {
  return (
    <div className={s.root}>
      <Link href="/scoreboard">
        <div className={s.inner}>Scoreboard</div>
      </Link>
    </div>
  );
};

export default LinkToScoreboard;

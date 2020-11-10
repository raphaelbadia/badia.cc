import { ReactNode } from 'react';
import cn from 'classnames';
import Link from '../Link/Link';
import s from './MenuLink.module.css';

interface Props {
  to: string;
  children: ReactNode | any;
}

const LinkToScoreboard: React.FC<Props> = (props: Props) => {
  const { to, children } = props;
  return (
    <div
      className={cn(s.root, {
        [s.scoreboardRoot]: to === '/',
      })}
    >
      <Link href={to}>
        <div className={cn(s.inner, { [s.innerRoot]: to === '/' })}>
          {children}
        </div>
      </Link>
    </div>
  );
};

export default LinkToScoreboard;

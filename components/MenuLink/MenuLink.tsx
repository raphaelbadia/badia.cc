import { ReactNode } from 'react';
import cn from 'classnames';
import { Clickable } from 'reakit';
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
        <Clickable
          as="button"
          className={cn(s.inner, { [s.innerRoot]: to === '/' })}
        >
          {children}
        </Clickable>
      </Link>
    </div>
  );
};

export default LinkToScoreboard;

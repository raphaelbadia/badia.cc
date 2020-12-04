import { FC } from 'react';
import cn from 'classnames';
import s from './SocialGrid.module.css';
import Link from '../Link';
import Github from '../Svg/Github';
import Linkedin from '../Svg/Linkedin';
import DevTo from '../Svg/DevTo';
import Twitter from '../Svg/Twitter';

interface Props {
  className?: string;
}

const SocialGrid: FC<Props> = ({ className = '' }: Props) => {
  return (
    <div className={cn(s.root, className)}>
      <Link href="https://github.com/raphaelbadia">
        <Github height="40px" width="40px" title="Find my projects on github" />
      </Link>
      <Link href="https://www.linkedin.com/in/raphael-badia/">
        <Linkedin
          height="40px"
          width="40px"
          title="See my resume on linkedin"
        />
      </Link>
      <Link href="https://dev.to/raphaelbadia/">
        <DevTo
          height="40px"
          width="40px"
          title="Read my blog posts on dev.to"
        />
      </Link>
      <Link href="https://twitter.com/raphaelbadia">
        <Twitter height="40px" width="40px" title="follow me on twitter" />
      </Link>
    </div>
  );
};

export default SocialGrid;

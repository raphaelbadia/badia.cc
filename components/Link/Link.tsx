import NextLink from 'next/link';
import { ReactNode } from 'react';
import { Clickable } from 'reakit/Clickable';

interface Props {
  href: string;
  children: ReactNode | any;
  as?: any;
}

const Link: React.FC<Props> = ({ href, children, as, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <Clickable as={as} {...rest}>
        {children}
      </Clickable>
    </NextLink>
  );
};

export default Link;

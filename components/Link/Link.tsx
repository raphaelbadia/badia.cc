import NextLink from 'next/link';
import { ReactNode } from 'react';
import { Clickable } from 'reakit/Clickable';

interface Props {
  href: string;
  children: ReactNode | any;
}

const Link: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Clickable as="a" {...props}>
        {children}
      </Clickable>
    </NextLink>
  );
};

export default Link;

import { FunctionComponent, JSXElementConstructor, CSSProperties } from 'react';
import cn from 'classnames';
import s from './Button.module.css';

type Variant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading';

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode | any;
}

const Text: FunctionComponent<Props> = ({ style, className = '', variant = 'body', children }) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    body: 'p',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!];

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.body]: variant === 'body',
          [s.heading]: variant === 'heading',
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
        },
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Text;

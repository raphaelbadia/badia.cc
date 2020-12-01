import { FC, ReactNode } from 'react';

interface Props {
  x?: number;
  y?: number;
  className?: string;
  children: ReactNode | any;
}

const ShiftBy: FC<Props> = (props: Props) => {
  const { x = 0, y = 0, className, children } = props;
  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
export default ShiftBy;

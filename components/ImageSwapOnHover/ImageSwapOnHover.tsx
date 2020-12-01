import { ComponentProps, FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import s from './ImageSwapOnHover.module.css';

type ImageProps = ComponentProps<typeof Image>;

type Props = ImageProps & {
  hoverSrc: string;
};

const ImageSwapOnHover: FC<Props> = ({ src, hoverSrc, ...rest }) => {
  return (
    <div className={cn('group', s.root)}>
      <Image src={src} className="h-full w-full object-cover" {...rest} />
      <Image
        src={hoverSrc}
        className="h-full w-full object-cover"
        priority
        {...rest}
      />
    </div>
  );
};

export default ImageSwapOnHover;

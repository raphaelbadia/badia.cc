import { FC, ReactNode, useRef, useState } from 'react';
import cn from 'classnames';
import SlickSlider from 'react-slick';
import { Clickable } from 'reakit';
import s from './Slider.module.css';

interface Props {
  className?: string;
  children: ReactNode | any;
}

const Slider: FC<Props> = ({ children, className = '' }: Props) => {
  const ref = useRef<SlickSlider>();
  const [slide, setSlide] = useState(0);
  const settings = {
    dots: true,
    autoplay: false,
  };

  const handleChange = (num: number) => () => {
    let nextIndex = slide + num;
    if (nextIndex >= children.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = children.length - 1;
    ref.current?.slickGoTo(nextIndex);
    setSlide(nextIndex);
  };

  return (
    <div className="relative z-10 pointer-events-auto">
      <SlickSlider
        ref={ref}
        {...settings}
        className={cn(
          s.root,
          'z-10 block left-0 right-0 whitespace-nowrap',
          className
        )}
      >
        {children}
      </SlickSlider>
      <Clickable
        as="div"
        onClick={handleChange(-1)}
        className={cn(
          'w-1/2 absolute top-0 bottom-0 left-0 right-auto cursor-arrow-left z-20 hidden sm:inline-block outline-none'
        )}
      />
      <Clickable
        as="div"
        onClick={handleChange(1)}
        className={cn(
          'w-1/2 absolute top-0 bottom-0 right-0 left-auto cursor-arrow-right z-30 hidden sm:inline-block outline-none'
        )}
      />
    </div>
  );
};

export default Slider;

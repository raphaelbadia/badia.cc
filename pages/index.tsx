import { FC } from 'react';
import Backdrop from '../components/Backdrop';
import Block from '../components/Block';
import Link from '../components/Link';
import ShiftBy from '../components/ShiftBy';
import Slider from '../components/Slider';
import ImageSwapOnHover from '../components/ImageSwapOnHover';
import SocialGrid from '../components/SocialGrid';

const IndexPage: FC = () => {
  return (
    <>
      <Block gridArea="photo" className="">
        <ImageSwapOnHover
          width={874}
          height={970}
          src="/images/moi-cote.png"
          hoverSrc="/images/moi-face.png"
        />
      </Block>

      <Block gridArea="hello" className="p-10 flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold mb-3">
          Hello{' '}
          <span role="img" aria-label="Hand waive">
            👋
          </span>
        </h1>
        <span>
          Raphaël Badia is a fullstack engineer that specializes in React.js
          since 2017. He builds components libraries, websites and mobile
          applications optimized for growth.
        </span>
      </Block>

      <Block gridArea="cv" className="relative cursor-pointer">
        <Link href="https://raphael.badia.cc" as="div">
          <img
            alt="overview of raphaelbadia's resume website"
            src="/images/cv.png"
            className="h-full w-full object-contain absolute"
          />
          <Backdrop className="p-10 flex items-end justify-end absolute text-white">
            <span className="text-3xl font-semibold ">CV</span>
            <ShiftBy y={-4} x={6}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </ShiftBy>
          </Backdrop>
        </Link>
      </Block>

      <Block gridArea="article" className="relative cursor-pointer">
        <Link
          href="https://dev.to/raphaelbadia/how-to-create-an-electron-forge-project-with-react-typescript-and-hmr-1gi3"
          as="div"
        >
          <img
            alt="A forge in black an white"
            src="/images/enclume.jpg"
            className="absolute h-full w-full object-cover"
          />
          <Backdrop className="absolute">
            <div className="absolute h-full w-full p-10 flex items-end">
              <div className="flex flex-col items-start  justify-end text-white">
                <span className="bg-white uppercase text-xs px-2 py-1 rounded-md font-semibold text-gray-700">
                  Last article
                </span>
                <h2 className="mt-2 text-3xl font-semibold">
                  How to create an electron-forge project (React, Typescript,
                  HMR)
                </h2>
                <svg
                  className="w-6 h-6 mt-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </Backdrop>
        </Link>
      </Block>

      <Block gridArea="maiia" className="relative">
        <Slider className="h-full">
          <div className="bg-maiia-blue-main h-full relative">
            <img
              alt="A drawing showing a doctor, as seen on Maiia's website"
              src="/images/maiia-doctor-blue.png"
              className="absolute top-0 w-full h-full object-contain"
            />
          </div>
          <div className="h-full w-full">
            <div className="bg-maiia-blue-main h-full flex items-center justify-center text-white text-4xl">
              <h2>www.maiia.com</h2>
            </div>
          </div>
          <div className="bg-maiia-blue-main h-full">
            <h3>More slide with pictures could be there</h3>
          </div>
        </Slider>
      </Block>

      <Block
        gridArea="social"
        className="p-10 flex items-center justify-center"
      >
        <SocialGrid />
      </Block>

      <Block gridArea="credits" className="p-10">
        <h2 className="text-2xl mb-3">Credits</h2>
        <p>
          Forge photo by{' '}
          <a
            href="https://unsplash.com/@neonbrand?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="font-bold"
          >
            NeONBRAND
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="font-bold"
          >
            Unsplash
          </a>
        </p>
        <p>
          Maiia&apos;s illustration belong to{' '}
          <a href="https://maiia.com" className="font-bold">
            Maiia
          </a>
        </p>
      </Block>
    </>
  );
};

export default IndexPage;

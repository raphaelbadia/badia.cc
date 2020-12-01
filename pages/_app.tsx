import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider as ReakitProvider } from 'reakit';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/index.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ReakitProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReakitProvider>
  );
};

export default MyApp;

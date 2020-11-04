import '../styles/index.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import Layout from '../components/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

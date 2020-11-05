import '../styles/index.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Layout from '../components/Layout';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactQueryCacheProvider>
  );
};

export default MyApp;

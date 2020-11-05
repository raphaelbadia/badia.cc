import '../styles/index.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Provider as ReakitProvider } from 'reakit';
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
    <ReakitProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReactQueryCacheProvider>
    </ReakitProvider>
  );
};

export default MyApp;

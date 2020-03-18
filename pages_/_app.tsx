import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>COVID-19 Info Portal</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="description" content="COVID-19 information in one place" />
      </Head>
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;

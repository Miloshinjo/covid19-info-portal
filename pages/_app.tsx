import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
        <meta
          name="google-site-verification"
          content="2xafql5NclP0ABx35guQ4K6ZTrPcpttVZAQdRXXO0Hk"
        />
      </Head>
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;

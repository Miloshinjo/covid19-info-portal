import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
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

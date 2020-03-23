import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
  DocumentInitialProps
} from 'next/document';

type Props = {
  props: DocumentProps;
  locale: string;
};

interface InitialProps extends DocumentInitialProps {
  locale: string;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
    let locale = 'en';

    if (ctx.pathname) {
      const [, lang] = ctx.pathname.split('/');

      if (lang !== '_error' && lang) locale = lang;
    }

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, locale };
  }

  render(): JSX.Element {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta
            name="keywords"
            content="Corona,Virus,Covid-19,Coronavirus,Information,Stats,Corona Stats"
          />
          <meta name="application-name" content="COVID-19 Info" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="description"
            content="Latest information and stats about COVID-19"
          />
          <meta name="format-detection" content="telephone=no" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:title" content="COVID-19 Info Portal" />
          <meta
            name="twitter:image"
            content="https://corona19.life/static/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@miloshinjo" />
        </Head>
        <body className="bg-gray-100 antialiased text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

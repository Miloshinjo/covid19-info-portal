import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <meta
          name="google-site-verification"
          content="VmFgTyGcsw8UYPSmOB6AbGkdxYxchkpKOUoftd8_pX8"
        />
        <body className="bg-gray-100 antialiased text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

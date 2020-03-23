import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Header from '../components/Header';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import Measures from '../components/Measures';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const { useTranslation } = require('next-translate');

export default function HomePage(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    ReactGA.initialize('UA-160988414-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const lang: string | null = localStorage.getItem('lang');

    if (lang === 'en' || !lang) {
      router.push('/');
      return;
    }
    router.push(`/${lang}`);
  }, []);

  const { t } = useTranslation();

  return (
    <main>
      <NextSeo
        title={t`seo:title`}
        description={t`seo:description`}
        canonical="https://www.corona19.life/"
        languageAlternates={[
          {
            href: 'https://www.corona19.life/sr',
            hrefLang: 'sr-Latn-rs'
          }
        ]}
        openGraph={{
          url: 'https://www.corona19.life/',
          title: t`seo:title`,
          description: t`seo:description`,
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'COVID-19 Info Portal'
        }}
      />
      <Header />
      <Cases />
      <Symptoms />
      <Measures />
      <FAQ />
      <Footer />
    </main>
  );
}

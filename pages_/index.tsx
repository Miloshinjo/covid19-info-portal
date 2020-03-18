import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import Measures from '../components/Measures';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const useTranslation = require('next-translate').useTranslation;

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    ReactGA.initialize('UA-160988414-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const lang: string | null = localStorage.getItem('lang');

    if (lang === 'en') {
      router.push('/');
      return;
    } else if (lang) {
      router.push(`/${lang}`);
      return;
    }
  }, []);

  return (
    <main>
      <Header />
      <Cases />
      <Symptoms />
      <Measures />
      <FAQ />
      <Footer />
    </main>
  );
}

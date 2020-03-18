import { useEffect } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import Measures from '../components/Measures';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    ReactGA.initialize('UA-160988414-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

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

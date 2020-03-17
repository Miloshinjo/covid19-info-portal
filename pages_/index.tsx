import { useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import Measures from '../components/Measures';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

type Props = {
  countries: string[];
};

export default function HomePage({ countries }: Props) {
  useEffect(() => {
    ReactGA.initialize('UA-160988414-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <main>
      <Header />
      <Cases countries={countries} />
      <Symptoms />
      <Measures />
      <FAQ />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const response = await axios.get('https://covid19.mathdro.id/api/countries');

  return {
    props: {
      countries: Object.keys(response.data.countries)
    }
  };
}

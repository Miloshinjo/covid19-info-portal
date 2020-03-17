import axios from 'axios';

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
  return (
    <main className="border-t-4 border-teal-500">
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

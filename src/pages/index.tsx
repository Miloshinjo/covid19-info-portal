import { useState } from 'react';
import axios from 'axios';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import CoronaIcon from '../components/icons/Corona';
import Symptoms from '../components/Symptoms';
import Measures from '../components/Measures';
import FAQ from '../components/FAQ';

type Props = {
  countries: string[];
};

export default function HomePage({ countries }: Props) {
  const [url, setUrl] = useState<string>('https://covid19.mathdro.id/api');

  return (
    <main>
      <div className="container mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center">
        <header>
          <div className="inline-flex items-center">
            <CoronaIcon className="w-10 h-10 mr-2 fill-current text-teal-500" />
            <h1 className="text-xl md:text-3xl font-semibold bold my-8">
              <span className="text-teal-500 font-bold">COVID-19</span> Info
              Portal
            </h1>
          </div>
        </header>

        <section className="section">
          <h2 className="section__header">known cases</h2>
          <CountrySelector countries={countries} setUrl={setUrl} />
          <Stats url={url} />
        </section>
        <section className="section">
          <h2 className="section__header">known symptoms</h2>
          <Symptoms />
        </section>
      </div>
      <div className="bg-teal-500 text-white">
        <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
          <h2 className="font-medium mb-2 text-xl uppercase">
            what can you do to protect yourself
          </h2>
          <Measures />
        </div>
      </div>

      <FAQ />
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

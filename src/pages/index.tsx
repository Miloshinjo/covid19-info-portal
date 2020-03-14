import { useState } from 'react';
import axios from 'axios';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

type Props = {
  countries: string[];
};

function HomePage({ countries }: Props) {
  const [url, setUrl] = useState<string>('https://covid19.mathdro.id/api');

  return (
    <main className="container mx-auto w-full px-4 md:px-0 md:w-1/2 flex flex-col justify-center">
      <header>
        <h1 className="text-xl md:text-3xl font-semibold bold my-8">
          COVID19 Virus Info Portal
        </h1>
      </header>

      <section className="section">
        <h2 className="section__header">known cases</h2>
        <CountrySelector countries={countries} setUrl={setUrl} />
        <Stats url={url} />
      </section>
      <section className="section">
        <h2 className="section__header">known symptoms</h2>
      </section>
      <section className="section">
        <h2 className="section__header">what can you do</h2>
      </section>
      <section className="section">
        <h2 className="section__header">frequently asked questions</h2>
      </section>
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

export default HomePage;

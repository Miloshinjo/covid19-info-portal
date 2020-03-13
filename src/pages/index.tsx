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
    <div className="container mx-auto flex flex-col justify-center">
      <h1 className="text-xl md:text-3xl  text-center font-semibold uppercase bold my-8">
        COVID19 Virus Info Portal
      </h1>
      <CountrySelector countries={countries} setUrl={setUrl} />
      <Stats url={url} />
    </div>
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

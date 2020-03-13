import { useState } from 'react';
import axios from 'axios';
import Stats from '../components/Stats';

type Props = {
  countries: {
    [string: string]: string;
  };
};

function HomePage({ countries }: Props) {
  const [url, setUrl] = useState('https://covid19.mathdro.id/api');

  return (
    <div className="container mx-auto flex flex-col justify-center">
      <h1 className="text-3xl text-center font-semibold uppercase bold">
        COVID19 Virus Info Portal
      </h1>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Entire World</option>
          <option disabled>---</option>
          {Object.keys(countries).map((country: string) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <Stats url={url} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get('https://covid19.mathdro.id/api/countries');

  return {
    props: {
      countries: response.data.countries
    }
  };
}

export default HomePage;

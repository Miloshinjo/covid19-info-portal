import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect
} from 'react';
import Loading from '../components/Loading';
import { Country } from './Cases';

const useTranslation = require('next-translate').useTranslation;

type Props = {
  countries: [];
  setSelectedCountry: Dispatch<SetStateAction<null | any>>;
};

export default function CountrySelector({
  countries,
  setSelectedCountry
}: Props) {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const countryJson = localStorage.getItem('selectedCountry');

    if (countryJson) {
      setSelectedCountry(JSON.parse(countryJson));
      setValue(JSON.parse(countryJson).country);
    }
  }, []);

  if (!countries)
    return (
      <div className="relative mb-8 w-full md:w-1/2">
        <div className="block cursor-pointer appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <Loading size={4} />
        </div>
      </div>
    );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry: any = countries.find(
      (country: Country) => e.target.value === country.country
    );

    setValue(selectedCountry?.country);
    setSelectedCountry(selectedCountry);
    localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
  };

  return (
    <div className="relative mb-8 w-full md:w-1/2">
      <select
        aria-label="Select country to load information for"
        onChange={handleChange}
        className="block cursor-pointer appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
      >
        <option>{t`cases:worldwide`}</option>
        <option disabled>---</option>
        {countries.map((country: any) => (
          <option key={country.country} value={country.country}>
            {country.country}
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
  );
}

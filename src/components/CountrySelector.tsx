import { Dispatch, SetStateAction, ChangeEvent } from 'react';

type Props = {
  countries: string[];
  setUrl: Dispatch<SetStateAction<string>>;
};

function CountrySelector({ countries, setUrl }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Entire World') {
      setUrl(`https://covid19.mathdro.id/api`);
      return;
    }

    setUrl(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
  };
  return (
    <div className="relative mb-8 w-full md:w-1/2">
      <select
        onChange={handleChange}
        className="block cursor-pointer appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option>Entire World</option>
        <option disabled>---</option>
        {countries.map((country: string) => (
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
  );
}

export default CountrySelector;

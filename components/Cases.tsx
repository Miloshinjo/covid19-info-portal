import { useState } from 'react';

import Stats from '../components/Stats';
import CountryStats from '../components/CountryStats';
import MostNewCases from '../components/MostNewCases';
import CountrySelector from '../components/CountrySelector';
import DataSource from '../components/DataSource';
import useFetchData, { UseFetchDataTypes } from '../hooks/useFetchData';
import { CountryModel } from '../models';

const { useTranslation } = require('next-translate');

export default function Cases(): JSX.Element {
  const { t } = useTranslation();
  const [stats, fetchingStats, statsError]: UseFetchDataTypes = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/all'
  );
  const [
    countries,
    fetchingCountries,
    countriesError
  ]: UseFetchDataTypes = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState<CountryModel | null>(
    null
  );

  return (
    <section className="section">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="section__header">{t`cases:title`}</h2>
        <div className="flex justify-between items-start">
          <CountrySelector
            countries={countries}
            setSelectedCountry={setSelectedCountry}
          />
          <button type="button">Refresh</button>
        </div>

        {selectedCountry ? (
          <CountryStats
            country={selectedCountry}
            fetching={fetchingCountries}
            error={countriesError}
          />
        ) : (
          <Stats stats={stats} fetching={fetchingStats} error={statsError} />
        )}

        <DataSource />
        <MostNewCases countries={countries} />
      </div>
    </section>
  );
}

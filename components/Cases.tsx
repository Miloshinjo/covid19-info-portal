import { useState } from 'react';

import Stats from '../components/Stats';
import CountryStats from '../components/CountryStats';
import Table from '../components/Table';
import CountrySelector from '../components/CountrySelector';
import DataSource from '../components/DataSource';
import RefreshIcon from '../components/icons/Refresh';
import useFetchData, { UseFetchDataTypes } from '../hooks/useFetchData';
import { CountryModel } from '../models';

const { useTranslation } = require('next-translate');

export default function Cases(): JSX.Element {
  const { t } = useTranslation();
  const [
    stats,
    fetchingStats,
    statsError,
    refetchStats
  ]: UseFetchDataTypes = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/all'
  );
  const [
    countries,
    fetchingCountries,
    countriesError,
    refetchCountries
  ]: UseFetchDataTypes = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState<CountryModel | null>(
    null
  );

  const refreshData = (): void => {
    refetchStats();
    refetchCountries();
    setSelectedCountry(selectedCountry);
  };

  return (
    <section className="section">
      <div className="mx-auto w-full rounded px-8 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="section__header">{t`cases:title`}</h2>
        <div className="flex justify-between items-center mb-8">
          <CountrySelector
            countries={countries}
            setSelectedCountry={setSelectedCountry}
          />
          <button
            type="button"
            onClick={refreshData}
            className="focus:outline-none hover:text-gray-900 transform hover:scale-105 ml-4 md:ml-0 hover:scale-1 text-gray-600 transition duration-150"
            aria-label="Refresh results"
          >
            <RefreshIcon />
          </button>
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
        <Table countries={countries} />
      </div>
    </section>
  );
}

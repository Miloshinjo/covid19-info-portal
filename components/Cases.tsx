import { useState, useEffect } from 'react';

import Stats from '../components/Stats';
import CountryStats from '../components/CountryStats';
import MostNewCases from '../components/MostNewCases';
import CountrySelector from '../components/CountrySelector';
import DataSource from '../components/DataSource';
import useFetchData from '../hooks/useFetchData';
const useTranslation = require('next-translate').useTranslation;

export type Country = {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
};

export default function Cases() {
  const { t } = useTranslation();
  const [stats, fetchingStats, statsError] = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/all'
  );
  const [countries, fetchingCountries, countriesError] = useFetchData(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <section className="section">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="section__header">{t`cases:title`}</h2>
        <CountrySelector
          countries={countries}
          setSelectedCountry={setSelectedCountry}
        />
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

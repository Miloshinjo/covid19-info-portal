import { memo } from 'react';
import { Country } from './Cases';
import Loading from './Loading';
import countriesTranslations from '../utils/countriesTranslations';

const useTranslation = require('next-translate').useTranslation;

type Props = {
  countries: Country[];
};

export default memo(function MostNewCases({ countries }: Props) {
  const { t, lang } = useTranslation();
  if (!countries) return <Loading />;
  return (
    <div className="mt-16">
      <h2 className="section__header w-2/3 md:w-full">{t`cases:mostConfirmedToday`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {countries
          .sort((a: Country, b: Country) => b.todayCases - a.todayCases)
          .filter((country: Country, index: number) => index < 5)
          .map((country: Country) => (
            <div className="flex items-center justify-between text-xl elevation p-2">
              <div className="font-medium mr-2">
                {countriesTranslations?.[country.country]?.[lang] ||
                  country.country}
              </div>
              <div>{country.todayCases}</div>
            </div>
          ))}
      </div>
    </div>
  );
});

import { memo } from 'react';
import Loading from './Loading';
import countriesTranslations from '../utils/countriesTranslations';
import { CountryModel } from '../models';

const { useTranslation } = require('next-translate');

type Props = {
  countries: CountryModel[];
};

export default memo(function MostNewCases({ countries }: Props) {
  const { t, lang } = useTranslation();
  if (!countries) return <Loading />;
  return (
    <div className="mt-16">
      <h2 className="section__header w-2/3 md:w-full">{t`cases:mostConfirmedToday`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {countries
          .sort(
            (a: CountryModel, b: CountryModel) => b.todayCases - a.todayCases
          )
          .filter((country: CountryModel, index: number) => index < 5)
          .map((country: CountryModel) => (
            <div
              key={country.country}
              className="flex items-center justify-between text-xl elevation p-2"
            >
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

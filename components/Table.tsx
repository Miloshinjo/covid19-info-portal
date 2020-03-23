import { ReactNode, memo, ReactText } from 'react';
import Loading from './Loading';
import countriesTranslations from '../utils/countriesTranslations';
import { CountryModel } from '../models';

const { useTranslation } = require('next-translate');

type Props = {
  countries: CountryModel[];
};

export default memo(function Table({ countries }: Props): JSX.Element {
  const { t, lang } = useTranslation();

  if (!countries)
    return (
      <div className="shadow-lg bg-white rounded-lg mt-8">
        <div className="flex">
          <TableHead title={t`cases:mostCasesToday`} />
          <TableHead title={t`cases:mostDeathsToday`} />
          <TableHead title={t`cases:mostCases`} />
          <TableHead title={t`cases:mostDeaths`} />
        </div>
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      </div>
    );

  const getByKey = (key: string): CountryModel[] =>
    countries
      .sort((a: CountryModel, b: CountryModel) => +b[key] - +a[key])
      .filter((country: CountryModel, index: number) => index < 5);

  const mostCasesToday = getByKey('todayCases');
  const mostCases = getByKey('cases');
  const mostDeaths = getByKey('deaths');
  const mostDeathsToday = getByKey('todayDeaths');

  const produceCells = (array: CountryModel[], key: string): JSX.Element[] =>
    array.map((country: CountryModel, index: number) => {
      if (index % 2 === 0) {
        return (
          <TableCell
            key={country.country}
            country={
              countriesTranslations?.[country.country]?.[lang] ||
              country.country
            }
            number={country[key]}
          />
        );
      }
      return (
        <TableCell
          key={country.country}
          country={
            countriesTranslations?.[country.country]?.[lang] || country.country
          }
          number={country[key]}
          colored
        />
      );
    });

  return (
    <div className="flex flex-col min-width-100 shadow-lg bg-white mt-8 rounded-lg overflow-hidden">
      <div className="flex">
        <TableHead title={t`cases:mostCasesToday`} />
        <TableHead title={t`cases:mostDeathsToday`} />
        <TableHead title={t`cases:mostCases`} />
        <TableHead title={t`cases:mostDeaths`} />
      </div>
      <div className="flex">
        <TableColumn>{produceCells(mostCasesToday, 'todayCases')}</TableColumn>
        <TableColumn>
          {produceCells(mostDeathsToday, 'todayDeaths')}
        </TableColumn>
        <TableColumn>{produceCells(mostCases, 'cases')}</TableColumn>
        <TableColumn>{produceCells(mostDeaths, 'deaths')}</TableColumn>
      </div>
    </div>
  );
});

function TableHead({ title }: { title: string }): JSX.Element {
  return (
    <h4 className="w-1/4 uppercase text-xs font-medium text-gray-600 bg-gray-100 p-4 flex justify-start">
      {title}
    </h4>
  );
}

function TableColumn({ children }: { children: ReactNode }): JSX.Element {
  return <div className="w-1/4">{children}</div>;
}

function TableCell({
  country,
  number,
  colored = false
}: {
  country: string;
  number: ReactText;
  colored?: boolean;
}): JSX.Element {
  return (
    <div
      className={`py-4 flex flex-col text-left px-4 ${colored &&
        'bg-gray-100'}`}
    >
      <div className="text-xs font-medium md:font-normal sm:text-sm md:text-xl">
        {country}
      </div>
      <div className="text-xs md:text-sm text-gray-700 ">{number}</div>
    </div>
  );
}

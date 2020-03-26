import Card from './NumbersCard';
import { CountryModel, ErrorModel } from '../models';
import countriesTranslations from '../utils/countriesTranslations';

const { useTranslation } = require('next-translate');

type Props = {
  country: CountryModel;
  fetching: boolean;
  error: ErrorModel;
};

export default function CountryStats({
  country,
  fetching,
  error
}: Props): JSX.Element {
  const { t, lang } = useTranslation();

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2
        className={`mb-4 text-2xl font-semibold ${lang === 'ar' &&
          'text-right'}`}
      >
        {countriesTranslations[country?.country]?.[lang] || country.country}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <Card
          title={t`cases:confirmed`}
          value={country?.cases}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <Card
          title={t`cases:recovered`}
          value={country?.recovered}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <Card
          title={t`cases:fatal`}
          value={country?.deaths}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <Card
          title={t`cases:unresolved`}
          value={country?.cases - country?.deaths - country?.recovered}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <Card
          title={t`cases:critical`}
          value={country?.critical}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <div
          className={`flex items-center md:justify-center text-2xl ${lang ===
            'ar' && 'justify-end'}`}
        >
          {t`cases:today`}
        </div>
        <Card
          title={t`cases:confirmed`}
          value={country?.todayCases}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
        <Card
          title={t`cases:fatal`}
          value={country?.todayDeaths}
          fetching={fetching}
          error={Boolean(error)}
          rtl={lang === 'ar'}
        />
      </div>
    </div>
  );
}

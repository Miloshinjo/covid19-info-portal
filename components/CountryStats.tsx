import Card from './NumbersCard';
const useTranslation = require('next-translate').useTranslation;

type Props = {
  country: any;
  fetching: boolean;
  error: any;
};

export default function CountryStats({ country, fetching, error }: Props) {
  const { t } = useTranslation();
  console.log(country);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <Card
          title={t`cases:confirmed`}
          value={country?.cases}
          fetching={fetching}
          error={Boolean(error)}
        />
        <Card
          title={t`cases:recovered`}
          value={country?.recovered}
          textColor="text-teal-500"
          fetching={fetching}
          error={Boolean(error)}
        />
        <Card
          title={t`cases:fatal`}
          value={country?.deaths}
          textColor="text-red-400"
          fetching={fetching}
          error={Boolean(error)}
        />
        <Card
          title={t`cases:unresolved`}
          value={country?.cases - country?.deaths - country?.recovered}
          textColor="text-orange-400"
          fetching={fetching}
          error={Boolean(error)}
        />
        <Card
          title={t`cases:critical`}
          value={country?.critical}
          textColor="text-red-400"
          fetching={fetching}
          error={Boolean(error)}
        />
        <div className="flex items-center justify-center text-2xl">
          {t`cases:today`}
        </div>
        <Card
          title={t`cases:confirmed`}
          value={country?.todayCases}
          textColor="text-gray-900"
          fetching={fetching}
          error={Boolean(error)}
        />
        <Card
          title={t`cases:fatal`}
          value={country?.todayDeaths}
          textColor="text-red-400"
          fetching={fetching}
          error={Boolean(error)}
        />
      </div>
    </>
  );
}

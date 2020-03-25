import Card from './NumbersCard';
import { StatsModel, ErrorModel } from '../models';

const { useTranslation } = require('next-translate');

type Props = {
  stats: StatsModel;
  fetching: boolean;
  error: ErrorModel;
};

export default function Stats({ stats, fetching, error }: Props): JSX.Element {
  const { t, lang } = useTranslation();

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="mb-4 text-2xl font-semibold">{t`cases:worldwide`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <Card
          title={t`cases:confirmed`}
          value={stats?.cases}
          fetching={fetching}
          error={Boolean(error)}
          dir = {lang=='ar' ? "rtl" : ""}
        />
        <Card
          title={t`cases:recovered`}
          value={stats?.recovered}
          fetching={fetching}
          error={Boolean(error)}
          dir = {lang=='ar' ? "rtl" : ""}
        />
        <Card
          title={t`cases:fatal`}
          value={stats?.deaths}
          fetching={fetching}
          error={Boolean(error)}
          dir = {lang=='ar' ? "rtl" : ""}
        />
        <Card
          title={t`cases:unresolved`}
          value={stats?.cases - stats?.deaths - stats?.recovered}
          fetching={fetching}
          error={Boolean(error)}
          dir = {lang=='ar' ? "rtl" : ""}
        />
      </div>
    </div>
  );
}

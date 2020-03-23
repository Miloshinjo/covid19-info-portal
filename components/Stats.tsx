import Card from './NumbersCard';
import { StatsModel, ErrorModel } from '../models';

const { useTranslation } = require('next-translate');

type Props = {
  stats: StatsModel;
  fetching: boolean;
  error: ErrorModel;
};

export default function Stats({ stats, fetching, error }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <Card
        title={t`cases:confirmed`}
        value={stats?.cases}
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title={t`cases:recovered`}
        value={stats?.recovered}
        textColor="text-teal-600"
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title={t`cases:fatal`}
        value={stats?.deaths}
        textColor="text-red-500"
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title={t`cases:unresolved`}
        value={stats?.cases - stats?.deaths - stats?.recovered}
        textColor="text-orange-500"
        fetching={fetching}
        error={Boolean(error)}
      />
    </div>
  );
}

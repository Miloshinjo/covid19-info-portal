import Card from './NumbersCard';
import useFetchData from '../hooks/useFetchData';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  url: string;
};

export default function Stats({ url }: Props) {
  const [stats, fetching, error] = useFetchData(url);
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Card
        title={t`cases:confirmed`}
        value={stats?.confirmed?.value}
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title={t`cases:recovered`}
        value={stats?.recovered?.value}
        textColor="text-teal-500"
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title={t`cases:fatal`}
        value={stats?.deaths?.value}
        textColor="text-red-400"
        fetching={fetching}
        error={Boolean(error)}
      />
    </div>
  );
}

import Card from './NumbersCard';
import useFetchData from '../hooks/useFetchData';

type Props = {
  url: string;
};

export default function Stats({ url }: Props) {
  const [stats, fetching, error] = useFetchData(url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Card
        title="Confirmed"
        value={stats?.confirmed?.value}
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title="Recovered"
        value={stats?.recovered?.value}
        textColor="text-teal-500"
        fetching={fetching}
        error={Boolean(error)}
      />
      <Card
        title="Died"
        value={stats?.deaths?.value}
        textColor="text-red-400"
        fetching={fetching}
        error={Boolean(error)}
      />
    </div>
  );
}
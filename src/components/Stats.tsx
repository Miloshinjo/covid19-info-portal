import Card from './Card';
import useFetchData from '../hooks/useFetchData';

type Props = {
  url: string;
};

function Stats({ url }: Props) {
  const [stats, fetching, error] = useFetchData(url);

  if (fetching || !stats) return <div>Loading...</div>;
  if (error) return <div>No reports of a virus yet.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Card
        title={Object.keys(stats)[0]}
        value={stats.confirmed.value}
        textColor="text-orange-400"
      />
      <Card
        title={Object.keys(stats)[1]}
        value={stats.recovered.value}
        textColor="text-green-400"
      />
      <Card
        title={Object.keys(stats)[2]}
        value={stats.deaths.value}
        textColor="text-red-400"
      />
    </div>
  );
}

export default Stats;

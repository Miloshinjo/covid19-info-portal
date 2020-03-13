import Card from './Card';
import useFetchData from '../hooks/useFetchData';

type Props = {
  url: string;
};

function Stats({ url }: Props) {
  const stats = useFetchData(url);

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="flex self-center mx-auto justify-between w-1/2">
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

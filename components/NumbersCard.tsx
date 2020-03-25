import Loading from './Loading';

type Props = {
  title: string;
  value: number;
  fetching: boolean;
  error: boolean;
};

export default function Card({
  title,
  value,
  fetching,
  error
}: Props): JSX.Element {
  return (
    <div className="inline-flex flex-col justify-between bg-white shadow-md rounded-lg">
      <div className="p-4">
        <h2 className="font-semibold text-sm md:text-base xl:text-sm text-gray-600">
          {title}
        </h2>
        <div className="text-center font-bold text-3xl md:text-2xl xl:text-3xl text-gray-900 flex">
          {error ? (
            'Error'
          ) : fetching || value === undefined ? (
            <Loading />
          ) : (
            Intl.NumberFormat('en-US').format(value)
          )}
        </div>
      </div>
    </div>
  );
}

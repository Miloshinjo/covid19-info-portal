import Loading from './Loading';

type Props = {
  title: string;
  value: number;
  textColor?: string;
  fetching: boolean;
  error: boolean;
};

export default function Card({
  title,
  value,
  textColor = 'text-gray-900',
  fetching,
  error
}: Props) {
  return (
    <div className="inline-flex flex-col justify-between elevation">
      <div className="p-4">
        <h2 className="text-center uppercase font-medium text-lg md:text-base xl:text-lg">
          {title}
        </h2>
        <div
          className={`text-center mt-3 font-medium text-4xl md:text-2xl xl:text-4xl ${textColor} flex justify-center`}
        >
          {error ? (
            '0'
          ) : fetching || value === undefined ? (
            <Loading />
          ) : (
            Intl.NumberFormat('de-DE').format(value)
          )}
        </div>
      </div>
    </div>
  );
}

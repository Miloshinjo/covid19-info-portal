import Loading from './Loading';

type Props = {
  title: string;
  value: number;
  textColor: string;
  fetching: boolean;
  error: boolean;
};

function Card({ title, value, textColor, fetching, error }: Props) {
  return (
    <div className="bg-white shadow-lg inline-flex flex-col justify-between rounded-lg">
      <div className="p-4">
        <h2 className="text-center uppercase">{title}</h2>
        <div
          className={`text-center mt-3 text-4xl ${textColor} flex justify-center`}
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

export default Card;

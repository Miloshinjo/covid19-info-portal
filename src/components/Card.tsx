type Props = {
  title: string;
  value: number;
  textColor: string;
};

function Card({ title, value, textColor }: Props) {
  return (
    <div className="bg-white shadow-lg inline-flex flex-col justify-between rounded-lg">
      <div className="p-4">
        <h2 className="text-center uppercase">{title}</h2>
        <div className={`text-center mt-3 text-4xl ${textColor}`}>{value}</div>
      </div>
    </div>
  );
}

export default Card;

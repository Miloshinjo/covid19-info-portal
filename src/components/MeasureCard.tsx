type Props = {
  title: string;
  paragraph: string;
  icon: JSX.Element;
};

export default function MeasureCard({ title, paragraph, icon }: Props) {
  return (
    <div className="flex">
      <div>{icon}</div>
      <div className="ml-4">
        <h4 className="font-semibold text-2xl leading-none mb-2">{title}</h4>
        <p className="text-gray-800">{paragraph}</p>
      </div>
    </div>
  );
}

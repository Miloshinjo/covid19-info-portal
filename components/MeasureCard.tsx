type Props = {
  title: string;
  paragraph: string;
  icon: JSX.Element;
};

export default function MeasureCard({ title, paragraph, icon }: Props) {
  return (
    <div className="flex">
      <div className="print__measure-icon">{icon}</div>
      <div className="ml-4">
        <h4 className="font-semibold text-2xl leading-none mb-2 print__font-black">
          {title}
        </h4>
        <p className="text-red-100 print__font-black">{paragraph}</p>
      </div>
    </div>
  );
}

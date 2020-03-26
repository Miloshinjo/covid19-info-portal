type Props = {
  title: string;
  paragraph: string;
  icon: JSX.Element;
  rtl: boolean;
};

export default function MeasureCard({
  title,
  paragraph,
  icon,
  rtl
}: Props): JSX.Element {
  return (
    <div className={`flex ${rtl && 'flex-row-reverse'}`}>
      <div className={`print__measure-icon ${rtl && 'ml-4'}`}>{icon}</div>
      <div className="ml-4">
        <h4
          className={`font-semibold text-2xl leading mb-2 print__font-black ${rtl &&
            'text-right'}`}
        >
          {title}
        </h4>
        <p
          className={`text-red-100 font-semibold print__font-black ${rtl &&
            'text-right'}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}

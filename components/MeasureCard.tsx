type Props = {
  title: string;
  paragraph: string;
  icon: JSX.Element;
  dir: String;
};

export default function MeasureCard({
  title,
  paragraph,
  icon,
  dir
}: Props): JSX.Element {
  return (
    <div className="flex">
      {dir=="rtl" ? null :<div className="print__measure-icon">{icon}</div>}
      <div className="ml-4">
        <h4 className={dir == "rtl" ?"font-semibold text-2xl leading mb-2 print__font-black text-right mr-2":"font-semibold text-2xl leading-none mb-2 print__font-black"}>
          {title}
        </h4>
        <p className={dir=="rtl"? "text-red-100 font-semibold print__font-black text-right mr-2":"text-red-100 font-semibold print__font-black"}>
          {paragraph}
        </p>
      </div>
      {dir=="rtl" ? <div className="print__measure-icon">{icon}</div> : null}
    </div>
  );
}

type Props = {
  title: string;
  icon: JSX.Element;
  dir: string;
};

export default function SymptomCard({ title, icon, dir }: Props): JSX.Element {
  return (
    <div className="bg-white rounded inline-flex">
      <div className={dir=="rtl"?"p-4 flex m-auto":"p-4 flex items-center"}>
        {dir == 'rtl' ?
          <h4 className="text-xl font-medium flex items-center mr-4 leading-snug print__font-black text-right">
            {title}
          </h4> : null}
        <div className="p-2 rounded-full flex items-center justify-center bg-teal-600 print__symptom-icon">
          {icon}
        </div>
        {dir == 'rtl' ? null :
          <h4 className="text-xl font-medium flex items-center ml-2 leading-snug print__font-black">
            {title}
          </h4>}
      </div>
    </div>
  );
}

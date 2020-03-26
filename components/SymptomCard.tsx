type Props = {
  title: string;
  icon: JSX.Element;
  rtl: boolean;
};

export default function SymptomCard({ title, icon, rtl }: Props): JSX.Element {
  return (
    <div className="bg-white rounded inline-flex">
      <div className={`p-4 flex ${rtl && 'flex-row-reverse	ml-auto'}`}>
        <div
          className={`p-2 rounded-full ${
            rtl ? 'ml-4' : 'mr-4'
          } flex items-center justify-center bg-teal-600 print__symptom-icon`}
        >
          {icon}
        </div>
        <h4 className="text-xl font-medium flex items-center leading-snug print__font-black">
          {title}
        </h4>
      </div>
    </div>
  );
}

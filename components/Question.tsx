type Props = {
  question: string;
  answer: string;
  rtl: boolean;
};

export default function Question({
  question,
  answer,
  rtl
}: Props): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
      <h4
        className={`font-semibold text-xl ${
          rtl ? 'ml-16' : 'mr-16'
        } mb-2 print__font-black ${rtl && 'text-right md:col-start-2'}`}
      >
        {question}
      </h4>
      <p
        className={`text-lg text-teal-100 print__font-black ${rtl &&
          'text-right md:col-start-1 md:row-start-1'}`}
      >
        {answer}
      </p>
    </div>
  );
}

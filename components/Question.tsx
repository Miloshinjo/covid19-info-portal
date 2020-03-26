type Props = {
  question: string;
  answer: string;
  dir: string;
};

export default function Question({ question, answer, dir }: Props): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
      {dir ===  "rtl" ? <p className="text-lg text-teal-100 print__font-black text-right">{answer}</p> : null}
      <h4 className={ dir ===  "rtl"? "font-semibold text-xl ml-16 mb-2 print__font-black text-right" : "font-semibold text-xl mr-16 mb-2 print__font-black"}>
        {question}
      </h4>
      {dir ===  "rtl" ? null :<p className="text-lg text-teal-100 print__font-black">{answer}</p>}
    </div>
  );
}

type Props = {
  question: string;
  answer: string;
};

export default function Question({ question, answer }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
      <h4 className="font-semibold text-xl mr-16 mb-2">{question}</h4>
      <p className="text-lg text-teal-100">{answer}</p>
    </div>
  );
}

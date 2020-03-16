import Question from './Question';

export default function FAQ() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="font-medium mb-2 text-xl uppercase">
          frequently asked questions
        </h2>
        <Question
          question="Is there a vaccine?"
          answer="Currently, there is no vaccine available."
        />
        <Question
          question="How does COVID-19 spread and what are the symptoms?"
          answer="COVID-19 is primarily spread through respiratory droplets, which means to become infected, people generally must be within six feet of someone who is contagious and come into contact with these droplets. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads. Symptoms of COVID-19 appear within two to 14 days after exposure and include fever, cough, runny nose and difficulty breathing."
        />
      </div>
    </div>
  );
}

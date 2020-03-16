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
        <Question
          question="How long does it take for symptoms of the COVID-19 to appear?"
          answer="CDC believes that symptoms of COVID-19 may appear in as few as two days, or as long as 14 days after exposure. To be cautious, many governments are requiring an isolation period of 14 days for people returning from endemic areas."
        />
        <Question
          question="How is COVID-19 treated?"
          answer="There is currently no approved medication for COVID-19. People with COVID-19 should receive supportive care to help relieve symptoms. For people with laboratory confirmed COVID-19, illnesses have ranged from mild symptoms to severe illness and death. For severe illness, treatment should include care to support vital organ functions. Seek prompt medical attention if your illness gets worse (for example, you have difficulty breathing). Before seeking medical attention, call your health care provider and tell them that you have, or are being evaluated for, COVID-19. Put on a facemask before you enter the doctor’s office, clinic, or hospital."
        />
        <Question
          question="Are antibiotics effective in preventing or treating COVID-19?"
          answer="No. Antibiotics do not work against viruses, they only work on bacterial infections. Antibiotics do not prevent or treat coronavirus disease (COVID-19), because COVID-19 is caused by a virus, not bacteria."
        />
      </div>
    </div>
  );
}

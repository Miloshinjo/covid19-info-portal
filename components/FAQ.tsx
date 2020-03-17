const useTranslation = require('next-translate').useTranslation;

import Question from './Question';

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="font-medium mb-2 text-xl uppercase">{t`faq:title`}</h2>
        <Question
          question={t`faq:isThereVaccine.q`}
          answer={t`faq:isThereVaccine.a`}
        />
        <Question
          question={t`faq:howIsSpread.q`}
          answer={t`faq:howIsSpread.a`}
        />
        <Question
          question={t`faq:howLongSymptomsToAppear.q`}
          answer={t`faq:howLongSymptomsToAppear.a`}
        />
        <Question
          question={t`faq:howIsTreated.q`}
          answer={t`faq:howIsTreated.a`}
        />
        <Question question={t`faq:deathRate.q`} answer={t`faq:deathRate.a`} />
        <Question
          question={t`faq:antibiotics.q`}
          answer={t`faq:antibiotics.a`}
        />
        <Question
          question={t`faq:boostImmuneSystem.q`}
          answer={t`faq:boostImmuneSystem.a`}
        />
        <Question question={t`faq:getItAgain.q`} answer={t`faq:getItAgain.a`} />
        <Question question={t`faq:ibuprofen.q`} answer={t`faq:ibuprofen.a`} />
        <Question question={t`faq:zinc.q`} answer={t`faq:zinc.a`} />
        <Question
          question={t`faq:disinfectantSprays.q`}
          answer={t`faq:disinfectantSprays.a`}
        />
        <Question
          question={t`faq:importedGoodsFromChina.q`}
          answer={t`faq:importedGoodsFromChina.a`}
        />
        <Question
          question={t`faq:youngAndHealthy.q`}
          answer={t`faq:youngAndHealthy.a`}
        />
        <Question question={t`faq:riskGroups.q`} answer={t`faq:riskGroups.a`} />
        <Question question={t`faq:masks.q`} answer={t`faq:masks.a`} />
      </div>
    </section>
  );
}

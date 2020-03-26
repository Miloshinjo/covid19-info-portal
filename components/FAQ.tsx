import Question from './Question';

const { useTranslation } = require('next-translate');

export default function FAQ(): JSX.Element {
  const { t, lang } = useTranslation();
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2
          className={
            lang === 'ar'
              ? 'font-medium mb-2 text-xl uppercase print__font-black text-right'
              : 'font-medium mb-2 text-xl uppercase print__font-black'
          }
        >{t`faq:title`}</h2>
        <Question
          question={t`faq:isThereVaccine.q`}
          answer={t`faq:isThereVaccine.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:howIsSpread.q`}
          answer={t`faq:howIsSpread.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:howLongSymptomsToAppear.q`}
          answer={t`faq:howLongSymptomsToAppear.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:howIsTreated.q`}
          answer={t`faq:howIsTreated.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:deathRate.q`}
          answer={t`faq:deathRate.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:antibiotics.q`}
          answer={t`faq:antibiotics.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:boostImmuneSystem.q`}
          answer={t`faq:boostImmuneSystem.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:getItAgain.q`}
          answer={t`faq:getItAgain.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:ibuprofen.q`}
          answer={t`faq:ibuprofen.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:zinc.q`}
          answer={t`faq:zinc.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:disinfectantSprays.q`}
          answer={t`faq:disinfectantSprays.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:importedGoodsFromChina.q`}
          answer={t`faq:importedGoodsFromChina.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:youngAndHealthy.q`}
          answer={t`faq:youngAndHealthy.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:riskGroups.q`}
          answer={t`faq:riskGroups.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:masks.q`}
          answer={t`faq:masks.a`}
          rtl={lang === 'ar'}
        />
        <Question
          question={t`faq:surfaces.q`}
          answer={t`faq:surfaces.a`}
          rtl={lang === 'ar'}
        />
      </div>
    </section>
  );
}

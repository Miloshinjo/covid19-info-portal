import Question from './Question';

const { useTranslation } = require('next-translate');

export default function FAQ(): JSX.Element {
  const { t, lang } = useTranslation();
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className={lang === 'ar' ? "font-medium mb-2 text-xl uppercase print__font-black text-right" : "font-medium mb-2 text-xl uppercase print__font-black"}>{t`faq:title`}</h2>
        <Question
          question={t`faq:isThereVaccine.q`}
          answer={t`faq:isThereVaccine.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:howIsSpread.q`}
          answer={t`faq:howIsSpread.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:howLongSymptomsToAppear.q`}
          answer={t`faq:howLongSymptomsToAppear.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:howIsTreated.q`}
          answer={t`faq:howIsTreated.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question question={t`faq:deathRate.q`} answer={t`faq:deathRate.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question
          question={t`faq:antibiotics.q`}
          answer={t`faq:antibiotics.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:boostImmuneSystem.q`}
          answer={t`faq:boostImmuneSystem.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question question={t`faq:getItAgain.q`} answer={t`faq:getItAgain.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question question={t`faq:ibuprofen.q`} answer={t`faq:ibuprofen.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question question={t`faq:zinc.q`} answer={t`faq:zinc.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question
          question={t`faq:disinfectantSprays.q`}
          answer={t`faq:disinfectantSprays.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:importedGoodsFromChina.q`}
          answer={t`faq:importedGoodsFromChina.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question
          question={t`faq:youngAndHealthy.q`}
          answer={t`faq:youngAndHealthy.a`}
          dir={lang === 'ar' ? "rtl" : ""}
        />
        <Question question={t`faq:riskGroups.q`} answer={t`faq:riskGroups.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question question={t`faq:masks.q`} answer={t`faq:masks.a`} dir={lang === 'ar' ? "rtl" : ""} />
        <Question question={t`faq:surfaces.q`} answer={t`faq:surfaces.a`} dir={lang === 'ar' ? "rtl" : ""} />
      </div>
    </section>
  );
}

import SymptomCard from './SymptomCard';
import CoughIcon from './icons/Cough';
import FeverIcon from './icons/Fever';
import LungsIcon from './icons/Lungs';

const { useTranslation } = require('next-translate');

export default function Symptoms(): JSX.Element {
  const { t, lang } = useTranslation();

  return (
    <section className="mb-8">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center pb-8 pt-4">
        <h2
          className={`section__header ${lang === 'ar' && 'text-right'}`}
        >{t`symptoms:title`}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <SymptomCard
            title={t`symptoms:dry cough`}
            icon={<CoughIcon className="fill-current text-white w-8 h-8" />}
            rtl={lang === 'ar'}
          />
          <SymptomCard
            title={t`symptoms:fever`}
            icon={<FeverIcon className="fill-current text-white w-8 h-8" />}
            rtl={lang === 'ar'}
          />
          <SymptomCard
            title={t`symptoms:shortness of breath`}
            icon={<LungsIcon className="fill-current text-white w-8 h-8" />}
            rtl={lang === 'ar'}
          />
        </div>
      </div>
    </section>
  );
}

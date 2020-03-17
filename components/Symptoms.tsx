import SymptomCard from './SymptomCard';
import CoughIcon from './icons/Cough';
import FeverIcon from './icons/Fever';
import LungsIcon from './icons/Lungs';
const useTranslation = require('next-translate').useTranslation;

export default function Symptoms() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="section__header">{t`symptoms:title`}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <SymptomCard
            title={t`symptoms:dry cough`}
            icon={<CoughIcon className="fill-current text-white w-8 h-8" />}
          />
          <SymptomCard
            title={t`symptoms:fever`}
            icon={<FeverIcon className="fill-current text-white w-8 h-8" />}
          />
          <SymptomCard
            title={t`symptoms:shortness of breath`}
            icon={<LungsIcon className="fill-current text-white w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  );
}

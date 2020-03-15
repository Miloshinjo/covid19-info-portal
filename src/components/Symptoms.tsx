import SymptomCard from './SymptomCard';
import CoughIcon from './icons/Cough';
import FeverIcon from './icons/Fever';
import LungsIcon from './icons/Lungs';

export default function Symptoms() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <SymptomCard
        title="Dry cough"
        icon={<CoughIcon className="fill-current text-white w-8 h-8" />}
      />
      <SymptomCard
        title="Fever"
        icon={<FeverIcon className="fill-current text-white w-8 h-8" />}
      />
      <SymptomCard
        title="Shortness of breath"
        icon={<LungsIcon className="fill-current text-white w-8 h-8" />}
      />
    </div>
  );
}

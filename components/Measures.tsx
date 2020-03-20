import MeasureCard from './MeasureCard';
import WashHandsIcon from './icons/WashHands';
import SocialDistancingIcon from './icons/SocialDistancing';
import TouchEyeIcon from './icons/TouchEye';
import ShakeHandsIcon from './icons/ShakeHands';
import VentilationIcon from './icons/Ventilation';
import ClipboardIcon from './icons/Clipboard';

const { useTranslation } = require('next-translate');

export default function Measures(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="bg-teal-500 text-white pb-4">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="font-medium mb-2 text-xl uppercase print__font-black">
          {t`measures:title`}
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
          <MeasureCard
            title={t`measures:socialDistancing.title`}
            paragraph={t`measures:socialDistancing.paragraph`}
            icon={<SocialDistancingIcon className="w-16 h-16 fill-current" />}
          />
          <MeasureCard
            title={t`measures:washHands.title`}
            paragraph={t`measures:washHands.paragraph`}
            icon={<WashHandsIcon className="w-16 h-16 fill-current" />}
          />
          <MeasureCard
            title={t`measures:dontTouchFace.title`}
            paragraph={t`measures:dontTouchFace.paragraph`}
            icon={<TouchEyeIcon className="w-16 h-16 fill-current" />}
          />
          <MeasureCard
            title={t`measures:dontShakeHands.title`}
            paragraph={t`measures:dontShakeHands.paragraph`}
            icon={<ShakeHandsIcon className="w-16 h-16 fill-current" />}
          />
          <MeasureCard
            title={t`measures:ventilate.title`}
            paragraph={t`measures:ventilate.paragraph`}
            icon={<VentilationIcon className="w-16 h-16 fill-current" />}
          />
          <MeasureCard
            title={t`measures:immunity.title`}
            paragraph={t`measures:immunity.paragraph`}
            icon={<ClipboardIcon className="w-16 h-16 fill-current" />}
          />
        </div>
      </div>
    </section>
  );
}

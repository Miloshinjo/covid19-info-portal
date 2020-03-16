import MeasureCard from './MeasureCard';
import WashHandsIcon from './icons/WashHands';
import SocialDistancingIcon from './icons/SocialDistancing';
import TouchEyeIcon from './icons/TouchEye';
import ShakeHandsIcon from './icons/ShakeHands';
import VentilationIcon from './icons/Ventilation';
import ClipboardIcon from './icons/Clipboard';

export default function Measures() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
      <MeasureCard
        title="Social Distancing"
        paragraph="Stay home if you can. It's the best way to avoid getting infected. Work from home if your job allows it. Only go out for essential food and medicine."
        icon={
          <SocialDistancingIcon className="w-16 h-16 fill-current text-teal-500" />
        }
      />
      <MeasureCard
        title="Wash your hands"
        paragraph="Washing hands often with soap and water for at least 15-20 seconds. If
          soap and water are not available, use hand sanitizer with at least 60%
          alcohol."
        icon={
          <WashHandsIcon className="w-16 h-16 fill-current text-teal-500" />
        }
      />
      <MeasureCard
        title="Don't touch your face"
        paragraph="Keep your hands away from your eyes, nose and mouth to prevent the spread of the virus from your hands through your mucus membrane."
        icon={<TouchEyeIcon className="w-16 h-16 fill-current text-teal-500" />}
      />
      <MeasureCard
        title="Don't shake hands"
        paragraph="Until the virus is gone, keep your distance and avoid contact. Use other methods of greeting people and keep your distance."
        icon={
          <ShakeHandsIcon className="w-16 h-16 fill-current text-teal-500" />
        }
      />
      <MeasureCard
        title="Ventilate your home"
        paragraph="Increase ventilation in your home by opening windows and/or adjusting air conditioning. Proper ventilation reduces the spread of pathogens."
        icon={
          <VentilationIcon className="w-16 h-16 fill-current text-teal-500" />
        }
      />
      <MeasureCard
        title="Boost your immune system"
        paragraph="Make sure to get enough sleep, eat healthy, get enough vitamins and supplements and excercise in order to boost your immune system."
        icon={
          <ClipboardIcon className="w-16 h-16 fill-current text-teal-500" />
        }
      />
    </div>
  );
}

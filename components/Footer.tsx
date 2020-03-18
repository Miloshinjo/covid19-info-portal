const useTranslation = require('next-translate').useTranslation;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white text-sm text-center">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8 print__font-black">
        {t`footer:disclaimer`}
      </div>
    </footer>
  );
}

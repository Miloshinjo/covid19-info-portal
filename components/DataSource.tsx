const { useTranslation } = require('next-translate');

export default function DataSource(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-2 text-xs lowercase">
      {t`cases:source`}:{' '}
      <a
        href="https://www.worldometers.info/coronavirus/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        worldometers.info
      </a>
    </div>
  );
}

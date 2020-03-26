const { useTranslation } = require('next-translate');

export default function DataSource(): JSX.Element {
  const { t, lang } = useTranslation();

  return (
    <div className="text-center mt-2 text-xs lowercase">
      {lang=== 'ar' ? null : <span>{t`cases:source`}:{' '}</span>}
      <a
        href="https://www.worldometers.info/coronavirus/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        worldometers.info
      </a>
      {lang=== 'ar' ? <span>{' '}:{t`cases:source`}</span> : null}
    </div>
  );
}

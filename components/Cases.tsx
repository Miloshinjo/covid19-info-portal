import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

type Props = {
  countries: string[];
};

export default function Cases({ countries }: Props) {
  const { t } = useTranslation();
  const [url, setUrl] = useState<string>('https://covid19.mathdro.id/api');

  return (
    <section className="section">
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8">
        <h2 className="section__header">{t`cases:title`}</h2>
        <CountrySelector countries={countries} setUrl={setUrl} />
        <Stats url={url} />
      </div>
    </section>
  );
}

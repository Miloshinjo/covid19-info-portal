import { memo } from 'react';
import dayjs from 'dayjs';
import Loading from './Loading';

const useTranslation = require('next-translate').useTranslation;

type Props = {
  lastUpdated: string;
};

export default memo(function LastUpdated({ lastUpdated }: Props) {
  const { t, lang } = useTranslation();

  let formattedLastUpdated;
  if (lang === 'en') {
    formattedLastUpdated = dayjs(lastUpdated).format('MM/DD/YYYY, HH:mm');
  } else if (lang === 'sr') {
    formattedLastUpdated = dayjs(lastUpdated).format('DD.MM.YYYY. u HH:mm');
  }

  return (
    <div className="text-center mt-2 text-sm">
      {t`cases:lastUpdated`}: {formattedLastUpdated}
    </div>
  );
});

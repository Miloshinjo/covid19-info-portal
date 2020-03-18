import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

export default function CountrySelector() {
  const router = useRouter();
  const [value, setValue] = useState<string>(router.pathname.replace('/', ''));
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'en') {
      router.push('/');
      setValue(e.target.value);
      localStorage.setItem('lang', 'en');
      return;
    }

    localStorage.setItem('lang', e.target.value);
    router.push(`/${e.target.value}`);
    setValue(e.target.value);
  };

  return (
    <div className="relative w-1/5">
      <select
        aria-label="Change the website language"
        onChange={handleChange}
        className="block cursor-pointer appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs md:text-sm"
        value={value}
      >
        <option value="en">English</option>
        <option value="sr">Srpski</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

import CoronaIcon from './icons/Corona';
import LanguageSelector from './LanguageSelector';

export default function Header(): JSX.Element {
  return (
    <header className="mx-auto py-8 flex flex-col justify-center">
      <div className="mx-auto flex items-center justify-between w-full px-4 lg:px-0 lg:w-1/2">
        <div className="flex items-center">
          <CoronaIcon className="w-10 h-10 mr-2 fill-current text-teal-600" />
          <h1 className="text-xl md:text-3xl font-semibold bold">
            <span className="text-teal-600 font-bold">COVID-19</span> Info
            Portal
          </h1>
        </div>

        <LanguageSelector />
      </div>
    </header>
  );
}

import CoronaIcon from './icons/Corona';

type Props = {
  size?: number;
};

export default function Loading({ size = 8 }: Props) {
  return (
    <div
      className={`loading-spinner fill-current text-gray-900 h-${size} w-${size} m-2`}
    >
      <CoronaIcon />
    </div>
  );
}

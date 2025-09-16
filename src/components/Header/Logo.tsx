import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center z-[100] relative">
      <img
        alt="Execiva"
        width="149"
        height="21"
        className="h-6 w-auto"
        src="/logo/1.png"
      />
    </Link>
  );
}

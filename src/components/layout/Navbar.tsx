import { Link } from 'react-router-dom';
import Github from '@/components/icons/Github';

export default function Navbar() {
  return (
    <header className="p-6 px-14 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">React .</Link>
      </h1>
      <nav className="flex items-center gap-6">
        <Link to="/about">About</Link>
        <Link to="https://github.com/snowin-jj/react-starter" target="_blank">
          <Github />
        </Link>
      </nav>
    </header>
  );
}

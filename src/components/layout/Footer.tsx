import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-center py-6">
      <p className="space-x-8">
        Made by{' '}
        <Link to="https://devsnow.in" target="_blank" className="underline">
          DevSnow
        </Link>
      </p>
    </footer>
  );
}

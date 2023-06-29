import { Link } from 'react-router-dom';
import Button from '@/components/ui/button/Button';

export default function Home() {
  return (
    <section className="center gap-4 text-center">
      <h1 className="head">React Template</h1>
      <p className="max-w-lg">
        Basic React template configured with ESLint, Prettier, TypeScript, React
        Router, and Tailwind CSS ✨
      </p>
      <Button>
        <Link
          to="https://github.com/snowin-jj/react-starter#react--vite--ts---boilerplate"
          target="_blank"
        >
          Get start
        </Link>
      </Button>
    </section>
  );
}

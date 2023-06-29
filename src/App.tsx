import { HashRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/Base';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notfound';

export default function App() {
  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </HashRouter>
  );
}

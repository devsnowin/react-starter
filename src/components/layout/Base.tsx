import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-7xl min-h-[100dvh] md:min-h-screen mx-auto grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
export default Layout;

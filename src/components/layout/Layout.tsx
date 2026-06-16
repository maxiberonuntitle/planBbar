import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

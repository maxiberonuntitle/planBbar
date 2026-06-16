import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import ScrollToTop from '../common/ScrollToTop';
import PlantDecoration from '../common/PlantDecoration';
import VisualEffects from '../common/VisualEffects';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-cream">
      <VisualEffects />
      <PlantDecoration />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

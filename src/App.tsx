import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import ReservationsPage from './pages/ReservationsPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/reservas" element={<ReservationsPage />} />
        <Route path="/ubicacion" element={<LocationPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

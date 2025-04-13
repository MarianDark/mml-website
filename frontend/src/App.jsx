import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Planes from './pages/Planes';
import Consejos from './pages/Consejos';
import KitDigital from './pages/KitDigital';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/kitdigital" element={<KitDigital />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;

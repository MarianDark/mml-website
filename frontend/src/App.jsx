import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Politica from "./pages/Politica";
import AvisoLegal from "./pages/AvisoLegal";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Planes from "./pages/Planes";
import Consejos from "./pages/Consejos";
import KitDigital from "./pages/KitDigital";
import Seo from "./pages/Seo";
import PaginasWeb from "./pages/PaginasWeb";
import RedesSociales from "./pages/RedesSociales";
import Ecommerce from "./pages/Ecommerce";

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
        <Route path="/servicios/seo" element={<Seo />} />
        <Route path="/servicios/web" element={<PaginasWeb />} />
        <Route path="/servicios/redes" element={<RedesSociales />} />
        <Route path="/servicios/ecommerce" element={<Ecommerce />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;

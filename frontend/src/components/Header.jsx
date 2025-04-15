import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false); // Para el menú de Servicios

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicios = () => {
    setServiciosOpen(!serviciosOpen);
  };

  const closeServicios = () => {
    setServiciosOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center p-2 md:p-4 shadow-md bg-white z-50">
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <img src={Logo} alt="MML Logo" className="w-20 h-20 md:w-36 md:h-36" />
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <h1 className="text-lg md:text-xl font-bold text-center md:text-left mt-2 md:mt-2">
        DISEÑO, TECNOLOGÍA Y ESTRATEGIA EN UNA SOLA PÁGINA.
      </h1>

      <nav className={`flex-col md:flex-row gap-4 md:gap-10 text-sm md:text-lg mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>

        {/* Menú desplegable de Servicios toggle */}
        <div className="relative">
          <button
            onClick={toggleServicios}
            className="text-slate-800 hover:text-white transition font-semibold"
          >
            Servicios ▾
          </button>

          {serviciosOpen && (
            <div className="absolute flex flex-col bg-white text-slate-800 shadow-md rounded-md p-2 mt-2 z-50 min-w-[200px] md:min-w-[150px] text-sm">
              <Link to="/servicios/seo" className="hover:text-mmlgold px-4 py-2 transition" onClick={closeServicios}>
                SEO Local
              </Link>
              <Link to="/servicios/web" className="hover:text-mmlgold px-4 py-2 transition" onClick={closeServicios}>
                Páginas Web
              </Link>
              <Link to="/servicios/redes" className="hover:text-mmlgold px-4 py-2 transition" onClick={closeServicios}>
                Redes Sociales
              </Link>
              <Link to="/servicios/ecommerce" className="hover:text-mmlgold px-4 py-2 transition" onClick={closeServicios}>
                E-commerce
              </Link>
            </div>
          )}
        </div>

        <Link to="/planes">Planes</Link>
      </nav>

      <a
        href="#footer"
        className="bg-slate-800 text-white px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition mt-4 md:mt-0"
      >
        CONTÁCTANOS
      </a>
    </header>
  );
}

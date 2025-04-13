import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center p-2 md:p-4 shadow-md bg-white z-50">
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <img src={Logo} alt="MML Logo" className="w-24 h-24 md:w-36 md:h-36" />
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <h1 className="text-xl md:text-3xl font-bold text-center md:text-left mt-2 md:mt-0">
        Diseño, tecnología y estrategia en una sola página.
      </h1>
      <nav className={`flex-col md:flex-row gap-4 md:gap-10 text-lg md:text-2xl mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <div className="relative group">
          <button className="text-slate-800 hover:text-mmlgold transition font-semibold">
            Servicios ▾
          </button>
          <div className="absolute hidden group-hover:flex flex-col bg-white text-slate-800 shadow-md rounded-md p-2 mt-2 z-50 min-w-[200px] md:min-w-[300px]">
            <Link to="/servicios/seo" className="hover:text-mmlgold px-4 py-2 transition">SEO Local</Link>
            <Link to="/servicios/web" className="hover:text-mmlgold px-4 py-2 transition">Páginas Web</Link>
            <Link to="/servicios/redes" className="hover:text-mmlgold px-4 py-2 transition">Redes Sociales</Link>
            <Link to="/servicios/ecommerce" className="hover:text-mmlgold px-4 py-2 transition">E-commerce</Link>
          </div>
        </div>
        <Link to="/planes">Planes</Link>
        <Link to="/consejos">Consejos</Link>
        <Link to="/kitdigital">Kit Digital</Link>
      </nav>
      <a href="#footer" className="bg-slate-800 text-white px-4 py-2 md:px-8 md:py-4 rounded text-lg md:text-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition mt-4 md:mt-0">
        CONTÁCTANOS
      </a>
    </header>
  );
}

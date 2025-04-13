import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center p-1 shadow-md bg-white z-50">
      <div className="flex flex-col items-start gap-0">
        <img src={Logo} alt="MML Logo" className="w-100 h-80" />
        <h1 className="text-4xl font-bold">Diseño, tecnología y estrategia en una sola página.</h1>
      </div>
      <nav className="flex gap-20 text-4xl">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <div className="relative group">
          <button className="text-slate-800 hover:text-mmlgold transition font-semibold">
            Servicios ▾
          </button>
          <div className="absolute hidden group-hover:flex flex-col bg-white text-slate-800 shadow-md rounded-md p-2 mt-2 z-50 min-w-[300px]">
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
      <a href="#footer" className="bg-slate-800 text-white px-8 py-4 rounded text-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition">
        CONTÁCTANOS
      </a>
    </header>
  );
}

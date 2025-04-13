import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center p-2 md:p-4 shadow-md bg-white z-50">
      <div className="flex flex-row items-center gap-4">
        <img src={Logo} alt="MML Logo" className="w-36 h-36 md:w-52 md:h-52" />
        <h1 className="text-2xl md:text-3xl font-bold">Diseño, tecnología y estrategia en una sola página.</h1>
      </div>
      <nav className="flex flex-col md:flex-row gap-4 md:gap-10 text-xl md:text-3xl mt-4 md:mt-0">
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

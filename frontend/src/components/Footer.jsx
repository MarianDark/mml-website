import FormContact from './FormContact';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-800 text-white px-6 pt-12 pb-6 space-y-8">
      <FormContact />

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="font-bold text-lg">MML Stack</h2>
          <p>Destaca tu negocio en Google</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Menú</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/#servicios" className="text-white hover:text-mmlgold transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/#testimonios" className="text-white hover:text-mmlgold transition">
                Testimonios
              </Link>
            </li>
            <li>
              <Link to="/planes" className="text-white hover:text-mmlgold transition">
                Planes
              </Link>
            </li>
            <li>
              <Link to="/consejos" className="text-white hover:text-mmlgold transition">
                Consejos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="text-white hover:text-mmlgold transition">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contacto</h3>
          <p>Email: hola@mml.com</p>
          <p>Teléfono: +34 600 116 095</p>
          <p>Dirección: Dirección de tu empresa</p>
        </div>
      </div>

      {/* Bloque final con texto legal y enlaces */}
      <div className="text-center text-sm text-white mt-10 border-t border-white/20 pt-6">
        <p>© 2023 MML Stack. Todos los derechos reservados.</p>
        <div className="mt-2 space-x-4">
          <Link
            to="/politica"
            className="text-white hover:text-mmlgold transition"
          >
            Política & Términos
          </Link>
          <Link
            to="/aviso-legal"
            className="text-white hover:text-mmlgold transition"
          >
            Aviso Legal
          </Link>
        </div>
      </div>
    </footer>
  );
}

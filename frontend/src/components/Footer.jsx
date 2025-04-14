import FormContact from './FormContact';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-800 text-white p-6">
      <FormContact />
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="font-bold">MML</h2>
          <p>Destaca tu negocio en Google</p>
        </div>
        <div>
          <h3 className="font-bold">Menú</h3>
          <ul>
            <li>Servicios</li>
            <li>Testimonios</li>
            <li>Planes</li>
            <li>Consejos</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contacto</h3>
          <p>Email: hola@mml.com</p>
          <p>Teléfono: +34 600 116 095</p>
          <p>Dirección: Dirección de tu empresa</p>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import plan1 from "../assets/images/plan1.jpg";
import plan2 from "../assets/images/plan2.png";
import plan3 from "../assets/images/plan3.png";

export default function Planes() {
  return (
    <section className="pt-32 px-4 md:px-10 bg-[#f8f5ef] text-gray-800 font-sans">

      {/* HERO SIN BOTÓN NI CAPA */}
      <div className="relative h-[200px] flex items-center justify-center text-center text-slate-800 bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: "url('/assets/images/header-plan.jpg')" }}>
        <div className="z-10">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Planes</h1>
          <p className="text-xl font-medium drop-shadow-md">Soluciones adaptadas a tus necesidades, contáctanos y resolveremos todas tus dudas.</p>
        </div>
      </div>

      {/* PLAN ESENCIAL */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center my-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 text-left px-4">
          <h2 className="text-2xl font-bold border-l-4 border-slate-800 pl-3">Plan Esencial</h2>
          <p>
            ¡Haz que tu negocio brille con nuestro Plan Esencial! Optimizamos tu presencia en <strong>Google My Business</strong> y creamos tu <strong>página web</strong> a medida.
          </p>
          <h3 className="font-bold">SEO LOCAL + PÁGINA WEB</h3>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Asesor Personal</li>
            <li>Optimización en Google Maps</li>
            <li>Técnica SEO</li>
            <li>Creación de página web</li>
            <li>Correos corporativos</li>
            <li>Mantenimiento web</li>
          </ul>
          <p className="mt-2">
            Por solo <span className="line-through">94€</span> <strong>84€</strong> /mes +IVA
          </p>
          <button className="bg-slate-800 text-white px-5 py-2 rounded text-sm hover:text-mmlgold transition">
            CONTRATAR
          </button>
        </div>
        <img src={plan1} alt="Plan Esencial" className="rounded-lg w-full object-cover shadow" />
      </motion.div>

      {/* PLAN VISIBILIDAD */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center my-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={plan2} alt="Plan Visibilidad" className="rounded-lg w-full object-cover shadow" />
        <div className="space-y-4 text-left px-4">
          <h2 className="text-2xl font-bold border-l-4 border-slate-800 pl-3">Plan Visibilidad</h2>
          <p>
            Potenciamos tu presencia en <strong>Google</strong> y <strong>redes sociales</strong>. ¡Conecta con tu audiencia y destaca!
          </p>
          <h3 className="font-bold">SEO LOCAL + REDES SOCIALES</h3>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Asesor Personal</li>
            <li>Optimización Google Maps</li>
            <li>Técnica SEO</li>
            <li>Gestión de redes</li>
            <li>Posts semanales</li>
            <li>Gestión de interacciones</li>
          </ul>
          <p className="mt-2">
            Por solo <span className="line-through">200€</span> <strong>190€</strong> /mes +IVA
          </p>
          <button className="bg-slate-800 text-white px-5 py-2 rounded text-sm hover:text-mmlgold transition">
            CONTRATAR
          </button>
        </div>
      </motion.div>

      {/* PLAN ECOMMERCE */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center my-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 text-left px-4">
          <h2 className="text-2xl font-bold border-l-4 border-slate-800 pl-3">Plan E-Commerce Plus</h2>
          <p>
            Crea tu tienda online y vende más. Incluye diseño personalizado, productos online y marketing en redes.
          </p>
          <h3 className="font-bold">TIENDA ONLINE + REDES SOCIALES</h3>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Asesor Personal</li>
            <li>Diseño y mantenimiento del E-Commerce</li>
            <li>Subida de productos</li>
            <li>Gestión de redes</li>
            <li>Posts semanales</li>
            <li>Gestión de interacciones</li>
          </ul>
          <p className="mt-2">
            Por solo <span className="line-through">200€</span> <strong>183€</strong> /mes +IVA
          </p>
          <button className="bg-slate-800 text-white px-5 py-2 rounded text-sm hover:text-mmlgold transition">
            CONTRATAR
          </button>
        </div>
        <img src={plan3} alt="Plan Ecommerce" className="rounded-lg w-full object-cover shadow" />
      </motion.div>
    </section>
  );
}

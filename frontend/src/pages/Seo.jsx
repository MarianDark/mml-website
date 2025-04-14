import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Seo() {
  const planesRef = useRef(null);
  const [resaltarPro, setResaltarPro] = useState(false);

  const scrollToPlanes = () => {
    if (planesRef.current) {
      planesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setResaltarPro(true);
      setTimeout(() => setResaltarPro(false), 3000);
    }
  };

  useEffect(() => {
    if (window.location.hash === "#planes-seo") {
      scrollToPlanes();
    }
  }, []);

  return (
    <section className="pt-40 px-4 md:px-10 bg-slate-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto text-center space-y-20">

        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-mmlgold mb-6">
            Servicio de SEO Local
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            ¿Quieres que tu negocio aparezca en las búsquedas locales de Google?
            En <span className="font-bold text-mmlgold">MML Stack</span> te ayudamos a optimizar tu visibilidad en tu ciudad o región.
            El SEO Local es la clave para atraer a clientes cercanos, destacar en Google Maps y convertir búsquedas en ventas reales.
            <br /><br />
            - Posicionamiento en Google My Business<br />
            - Optimización por palabras clave locales<br />
            - Aumento de visibilidad frente a la competencia<br />
            - Estrategias de reseñas y reputación online
          </p>
        </motion.div>

{/* Planes de precios */}
<motion.div
  ref={planesRef}
  id="planes-seo"
  className="grid gap-8 md:grid-cols-3"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  {/* BASIC */}
  <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6">
    <h3 className="text-3xl font-bold text-slate-800">BASIC</h3>
    <p className="text-xl text-mmlgold font-bold">
      56€ <span className="text-base text-gray-600">/mes + IVA</span>
    </p>
    <ul className="text-left space-y-2 text-sm md:text-base">
      <li>✔️ Más visibilidad en Google</li>
      <li>✔️ Asesor personal</li>
      <li>✔️ Más llamadas, mensajes y visitas</li>
      <li>✔️ Publicaciones semanales</li>
      <li>✔️ Sin permanencia</li>
    </ul>
    <button className="bg-slate-800 text-white font-semibold px-6 py-2 rounded transition hover:text-mmlgold">
      CONTRATAR
    </button>
  </div>

  {/* PRO DESTACADO */}
  <div className={`bg-white p-8 rounded-xl shadow-lg border-4 border-mmlgold relative text-center space-y-6 transform transition ${resaltarPro ? "scale-110 ring-4 ring-mmlgold" : "scale-105"}`}>
    <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg">
      DESTACADO
    </span>
    <h3 className="text-3xl font-bold text-slate-800">PRO</h3>
    <p className="text-xl text-mmlgold font-bold">
      76€ <span className="text-base text-gray-600">/mes + IVA</span>
    </p>
    <ul className="text-left space-y-2 text-sm md:text-base">
      <li>✔️ Más visibilidad en Google</li>
      <li>✔️ Asesor personal</li>
      <li>✔️ Más llamadas, mensajes y visitas</li>
      <li>✔️ Trabajo de técnica SEO</li>
      <li>✔️ Supera tu competencia</li>
      <li>✔️ Sin permanencia</li>
    </ul>
    <button className="bg-slate-800 text-white font-semibold px-6 py-2 rounded transition hover:text-mmlgold">
      CONTRATAR
    </button>
  </div>

  {/* PREMIUM */}
  <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6">
    <h3 className="text-3xl font-bold text-slate-800">PREMIUM</h3>
    <p className="text-xl text-mmlgold font-bold">
      117€ <span className="text-base text-gray-600">/mes + IVA</span>
    </p>
    <ul className="text-left space-y-2 text-sm md:text-base">
      <li>✔️ Todo lo anterior</li>
      <li>✔️ Publicamos tus productos/servicios</li>
      <li>✔️ Tendrás más contactos y clientes</li>
      <li>✔️ Informe trimestral</li>
      <li>✔️ Sin permanencia</li>
    </ul>
    <button className="bg-slate-800 text-white font-semibold px-6 py-2 rounded transition hover:text-mmlgold">
      CONTRATAR
    </button>
  </div>
</motion.div>


        {/* Extras + Botón scroll */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-slate-800 mb-4">Un pack completo</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-3xl">
            Conoce todas las acciones que implementamos para que tu negocio destaque en las búsquedas locales de Google. Optimizamos cada detalle para que tus clientes te encuentren primero.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Inspección Palabras Clave", desc: "Análisis completo y búsqueda de las mejores palabras clave para tu negocio." },
              { title: "Publicaciones semanales", desc: "Contenido semanal optimizado para destacar en Google." },
              { title: "Servicio Técnico", desc: "Técnicos especializados para mantener tu ficha y posicionamiento activo." },
              { title: "Actualizaciones del negocio", desc: "Nos encargamos de festivos, cambios de horarios y más." },
              { title: "Geolocalización Multimedia", desc: "Posicionamos tus imágenes y videos estratégicamente." },
              { title: "Gestión de reseñas", desc: "Reseñas positivas para mejorar tu reputación y atraer más clientes." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Botón scroll a planes */}
          <div className="text-center mt-10">
            <button
              onClick={scrollToPlanes}
              className="bg-slate-800 text-white font-semibold px-8 py-3 rounded-md text-lg transition hover:text-mmlgold"
            >
              LO QUIERO!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

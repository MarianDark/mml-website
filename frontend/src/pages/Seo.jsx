import { motion } from "framer-motion";

export default function Seo() {
  return (
    <section className="pt-40 px-6 bg-slate-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Servicio de SEO Local
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ¿Quieres que tu negocio aparezca en las búsquedas locales de Google? En{" "}
          <span className="font-bold text-mmlgold">MML Stack</span> te ayudamos a optimizar tu visibilidad en tu ciudad o región.
          <br /><br />
          El SEO Local es la clave para atraer a clientes cercanos, destacar en Google Maps y convertir búsquedas en ventas reales.
          <br /><br />
          🔍 Posicionamiento en Google My Business<br />
          📍 Optimización por palabras clave locales<br />
          🏆 Aumento de visibilidad frente a la competencia<br />
          💬 Estrategias de reseñas y reputación online
          <br /><br />
          Tu negocio debe estar donde tus clientes te buscan. Nosotros te llevamos allí.
        </motion.p>
      </div>
    </section>
  );
}

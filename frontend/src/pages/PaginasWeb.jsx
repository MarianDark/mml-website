import { motion } from "framer-motion";

export default function PaginasWeb() {
  return (
    <section className="pt-40 px-6 bg-slate-100 text-gray-800 font-sans min-h-screen overflow-y-auto">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Páginas Web Personalizadas
        </motion.h2>

        <motion.p
          className="text-xl md:text-3xl leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <span className="font-bold text-mmlgold">MML Stack</span> creamos páginas web que van más allá de lo visual.
          Desarrollamos sitios personalizados desde cero, adaptados a tus objetivos, tu marca y tu público.
          <br /><br />
          Diseñamos con propósito, desarrollamos con precisión y nos aseguramos de que tu web sea rápida,
          funcional, estética y optimizada para todos los dispositivos.
          <br /><br />
          Ya sea un sitio informativo, corporativo o una landing page, en <strong>MML Stack</strong> lo
          convertimos en una herramienta poderosa para tu presencia online.
        </motion.p>
      </div>
    </section>
  );
}

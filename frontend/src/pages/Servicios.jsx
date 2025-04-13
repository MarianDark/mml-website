import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Servicios
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <span className="font-bold text-mmlgold">MML</span>, ofrecemos soluciones digitales a medida para que tu negocio crezca:
          <br /><br />
          <span className="font-semibold text-gray-900">Diseño web responsive</span> que se adapta a todos los dispositivos,
          <span className="font-semibold text-gray-900"> optimización SEO</span> para posicionarte en buscadores,
          <span className="font-semibold text-gray-900"> integración de formularios</span> personalizados,
          <span className="font-semibold text-gray-900"> bases de datos escalables</span> y
          <span className="font-semibold text-gray-900"> automatización inteligente</span> que ahorra tiempo y dinero.
        </motion.p>

        {/* Opcional: lista animada o cards por servicio */}
        <div className="grid gap-6 md:grid-cols-2 text-left text-gray-700 max-w-3xl mx-auto">
          {[
            "Diseño web responsive",
            "Optimización SEO profesional",
            "Formularios conectados a tu base de datos",
            "Bases de datos MongoDB o MySQL",
            "Automatización de procesos web",
          ].map((servicio, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <span className="text-mmlgold text-xl">✔️</span>
              <p>{servicio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

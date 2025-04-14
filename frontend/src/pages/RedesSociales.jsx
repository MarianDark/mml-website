import { motion } from "framer-motion";

export default function RedesSociales() {
  return (
    <section className="pt-40 px-6 bg-white text-gray-800 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gestión de Redes Sociales
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <strong className="text-mmlgold">MML Stack</strong> no solo creamos contenido, creamos comunidad.
          <br /><br />
          -Diseñamos estrategias efectivas para conectar con tu audiencia. <br />
          -Gestionamos tus perfiles con enfoque estratégico y creatividad. <br />
          -Generamos contenido visual atractivo, optimizado para aumentar el alcance, la interacción y el valor de tu marca.
          <br /><br />
          Confía en nosotros para llevar tus redes sociales al siguiente nivel y convertir seguidores en clientes reales.
        </motion.p>
      </div>
    </section>
  );
}

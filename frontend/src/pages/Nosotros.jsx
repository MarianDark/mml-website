import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section className="py-20 px-6 bg-slate-100 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-6 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.p
          className="text-4xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <span className="font-bold text-mmlgold">MML Stack</span> no solo creamos páginas web. 
          <span className="italic"> Diseñamos experiencias digitales</span> que inspiran, que venden, y que cuentan la historia de tu negocio con impacto.
          <br /><br />
          Combinamos <span className="font-semibold">creatividad, estrategia y tecnología</span> para que tu marca no solo esté en línea, 
          sino que deje huella. Porque tu web no es solo una vitrina, es tu carta de presentación al mundo digital.
        </motion.p>
      </div>
    </section>
  );
}

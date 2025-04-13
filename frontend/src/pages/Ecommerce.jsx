import { motion } from "framer-motion";

export default function Ecommerce() {
  return (
    <section className="pt-40 px-6 bg-white text-gray-800 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Desarrollo de E-commerce
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          💼 Convierte tu negocio en una tienda online totalmente funcional, moderna y optimizada para vender. <br />
          🛒 Te ofrecemos soluciones de comercio electrónico personalizadas con carrito, pasarelas de pago, panel de productos y control de stock. <br />
          📊 Además, integramos herramientas analíticas para que puedas medir tus resultados y escalar tu negocio.
          <br /><br />
          En <strong className="text-mmlgold">MML Stack</strong> diseñamos tu tienda como si fuera nuestra.
        </motion.p>
      </div>
    </section>
  );
}

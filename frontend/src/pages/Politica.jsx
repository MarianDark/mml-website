import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Politica() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="pt-40 px-6 bg-white text-gray-800 font-sans min-h-screen max-w-5xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-bold text-slate-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Política de Privacidad y Términos de Uso
      </motion.h1>

      <p>
        En <strong>MML Stack</strong> nos tomamos muy en serio tu privacidad. A continuación detallamos cómo
        recopilamos, usamos y protegemos tu información.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">1. Recopilación de Datos</h2>
      <p>
        Recopilamos datos personales como nombre, correo electrónico y número de teléfono para brindarte nuestros servicios.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">2. Uso de la Información</h2>
      <p>
        Utilizamos tus datos para comunicarnos contigo, personalizar los servicios y mejorar la experiencia del usuario.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">3. Términos de Uso</h2>
      <p>
        Al utilizar nuestro sitio aceptas los términos y condiciones. No se permite el uso indebido del contenido publicado.
      </p>

      <p className="mt-6 text-sm text-gray-600">Última actualización: Abril 2025</p>
    </section>
  );
}

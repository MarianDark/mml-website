import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AvisoLegal() {
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
        Aviso Legal
      </motion.h1>

      <p>
        Este sitio web es propiedad de <strong>MML Stack</strong>. A continuación se describen los términos legales
        que rigen su uso.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">1. Titularidad</h2>
      <p>
        Titular: MML Stack <br />
        Email de contacto: hola@mml.com <br />
        Dirección: Dirección de tu empresa
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">2. Propiedad Intelectual</h2>
      <p>
        Todo el contenido de este sitio (textos, imágenes, logotipos, diseño) está protegido por derechos de autor y
        propiedad intelectual.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">3. Responsabilidad</h2>
      <p>
        MML Stack no se hace responsable del mal uso de la información contenida en esta web ni de los enlaces externos.
      </p>

      <p className="mt-6 text-sm text-gray-600">Última actualización: Abril 2025</p>
    </section>
  );
}

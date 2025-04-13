import { motion } from "framer-motion";
import PlanCard from "../components/PlanCard";

export default function Planes() {
  return (
    <section className="pt-60 px-6 bg-white text-gray-800 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-6xl font-bold mb-10 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Planes
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <PlanCard
            title="Básico"
            price="90€ + IVA"
            features={[
              "1 Página de Inicio",
              "Diseño responsive",
              "Formulario de contacto",
              "Entrega en 10 días",
            ]}
          />

          <PlanCard
            title="Profesional"
            price="190€ + IVA"
            features={[
              "Hasta 5 secciones",
              "Animaciones + SEO básico",
              "Integración con WhatsApp",
              "Entrega en 14 días",
            ]}
            highlighted
          />

          <PlanCard
            title="Premium"
            price="290€ + IVA"
            features={[
              "Web personalizada completa",
              "SEO avanzado y Analytics",
              "Integración con base de datos",
              "Soporte por 1 mes",
              "Entrega en 30 días",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
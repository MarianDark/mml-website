import { motion } from "framer-motion";

export default function PlanCard({ title, price, features, highlighted }) {
  return (
    <motion.div
      className={`relative bg-white p-6 md:p-8 rounded-2xl shadow-md border-2 flex flex-col justify-between transition-all duration-300 ${
        highlighted
          ? "border-mmlgold scale-105 shadow-lg z-10"
          : "border-gray-300 hover:border-mmlgold"
      }`}
      whileHover={{ scale: 1.03 }}
    >
      {/* Etiqueta de "Mejor opción" */}
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mmlgold text-white px-2 py-1 text-sm md:text-base font-semibold rounded-full shadow-md">
          ⭐ DESTACADO
        </div>
      )}

      {/* Título y precio */}
      <div className="mb-6">
        <h3 className="text-xl md:text-3xl font-bold text-mmlgold mb-2">
          {title}
        </h3>
        <p className="text-3xl md:text-4xl font-bold text-gray-800">{price}</p>
      </div>

      {/* Lista de características */}
      <ul className="space-y-4 text-gray-700 text-sm md:text-lg mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* Botón */}
      {/* Botón */}
      <button className="bg-slate-800 text-white hover:text-mmlgold font-semibold px-3 py-2 rounded-md text-sm md:text-base transition-colors">
        CONTRATAR
      </button>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function PlanCard({ title, price, features, highlighted }) {
  return (
    <motion.div
      className={`relative bg-white p-12 rounded-3xl shadow-lg border-4 flex flex-col justify-between transition-all duration-300 ${
        highlighted
          ? "border-mmlgold scale-105 shadow-xl z-10"
          : "border-gray-300 hover:border-mmlgold"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Etiqueta de "Mejor opción" */}
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mmlgold text-white px-4 py-2 text-lg font-semibold rounded-full shadow-lg">
          ⭐ Mejor opción
        </div>
      )}

      {/* Título y precio */}
      <div className="mb-10">
        <h3 className="text-4xl font-bold text-mmlgold mb-4">{title}</h3>
        <p className="text-5xl font-bold text-gray-800">{price}</p>
      </div>

      {/* Lista de características */}
      <ul className="space-y-6 text-gray-700 text-2xl mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-center gap-3">
            ✅ {feature}
          </li>
        ))}
      </ul>
      {/* Botón de acción */}
      <button className="bg-slate-800 text-white hover:text-mmlgold font-semibold px-6 py-4 rounded-xl text-2xl transition-colors">
        CONTRATAR
      </button>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 shadow-md border-t-4 border-mmlgold hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl md:text-4xl mb-3 text-mmlgold">{icon}</div>
      <h3 className="text-xl md:text-2xl font-semibold mb-1 text-slate-800">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </motion.div>
  );
}

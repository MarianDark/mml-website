import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md border-t-4 border-mmlgold hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-6xl mb-4 text-mmlgold">{icon}</div>
      <h3 className="text-4xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-gray-600 text-2xl">{description}</p>
    </motion.div>
  );
}

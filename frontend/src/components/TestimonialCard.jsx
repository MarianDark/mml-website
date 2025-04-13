import { motion } from "framer-motion";

export default function TestimonialCard({ name, message, avatar }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-600 italic mb-4 text-3xl">"{message}"</p>
      <h4 className="text-mmlgold font-bold text-4xl">{name}</h4>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function TestimonialCard({ name, message, avatar }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
      />
      <p className="text-gray-600 italic mb-3 text-sm md:text-base">"{message}"</p>
      <h4 className="text-mmlgold font-semibold text-base md:text-lg">{name}</h4>
    </motion.div>
  );
}

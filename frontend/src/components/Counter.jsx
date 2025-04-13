import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Counter({ label, target }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = Math.ceil(target / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold text-mmlgold">{count}</h3>
      <p className="text-slate-800">{label}</p>
    </motion.div>
  );
}

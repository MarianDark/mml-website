import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-slate-800 border border-slate-800 rounded-xl p-2 shadow-md z-50 hover:text-mmlgold transition"
        title="Volver arriba"
      >
        <FaAngleDoubleUp className="text-xl" />
      </button>
    )
  );
}

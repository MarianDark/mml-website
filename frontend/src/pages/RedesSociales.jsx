import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import rs1 from "../assets/images/rs1.png";
import rs2 from "../assets/images/rs2.png";
import rs3 from "../assets/images/rs3.png";
import {
  FaBullhorn,
  FaChartBar,
  FaPenFancy,
  FaUsers,
  FaHeart,
  FaComments,
} from "react-icons/fa";

export default function RedesSociales() {
  const planesRef = useRef(null);
  const packRef = useRef(null);
  const footerRef = useRef(document.getElementById("footer"));
  const [highlight, setHighlight] = useState(false);

  const scrollToPlanes = () => {
    if (planesRef.current) {
      planesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlight(true);
      setTimeout(() => setHighlight(false), 3000);
    }
  };

  const scrollToPack = () => {
    if (packRef.current) {
      packRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const servicios = [
    {
      icon: <FaPenFancy className="text-mmlgold text-3xl mb-2" />,
      title: "Estrategia de contenido",
      desc: "Análisis y búsqueda de las mejores palabras clave para tu negocio.",
    },
    {
      icon: <FaBullhorn className="text-mmlgold text-3xl mb-2" />,
      title: "Territorios de comunicación",
      desc: "Publicaciones semanales optimizadas en clave SEO.",
    },
    {
      icon: <FaChartBar className="text-mmlgold text-3xl mb-2" />,
      title: "Análisis de la competencia",
      desc: "Técnicos especializados para mejorar tu posicionamiento.",
    },
    {
      icon: <FaUsers className="text-mmlgold text-3xl mb-2" />,
      title: "Publicaciones semanales",
      desc: "Gestión y actualización de contenido adaptado a tu negocio.",
    },
    {
      icon: <FaHeart className="text-mmlgold text-3xl mb-2" />,
      title: "Interacciones con los usuarios",
      desc: "Geolocalización y publicación de contenido para mejorar visibilidad.",
    },
    {
      icon: <FaComments className="text-mmlgold text-3xl mb-2" />,
      title: "Informe y análisis de resultados",
      desc: "Estudios mensuales y seguimiento del rendimiento de tus redes.",
    },
  ];

  useEffect(() => {
    if (window.location.hash === "#planes-rs") {
      scrollToPlanes();
    }
  }, []);

  return (
    <section className="pt-40 px-6 bg-white text-gray-800 font-sans min-h-screen space-y-24">
      {/* HERO */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Imágenes lado izquierdo */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <img
              src={rs1}
              alt="RS 1"
              className="rounded-lg w-[200px] h-[200px] shadow-md"
            />
            <img
              src={rs2}
              alt="RS 2"
              className="rounded-lg w-[180px] h-[200px] shadow-md"
            />
          </div>
          <img
            src={rs3}
            alt="RS 3"
            className="rounded-lg w-[200px] h-[200px] shadow-md"
          />
        </div>

        {/* Texto lado derecho */}
        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold text-slate-800">
            Potencia Tu Marca Online Ahora
          </h2>
          <p className="text-gray-700 text-lg">
            ¡Haz que tu negocio destaque! Mejoramos tu presencia online,
            conectamos con la audiencia y generamos impacto real.
          </p>
          <button
            onClick={scrollToPack}
            className="bg-slate-800 text-white font-semibold px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            COMENZAR
          </button>
        </div>
      </motion.div>

      {/* PLAN DESTACADO */}
      <motion.div
        ref={planesRef}
        id="planes-rs"
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold text-slate-800 mb-2">
          La presencia que necesita tu marca
        </h3>
        <p className="text-base text-gray-700 mb-6">
          Adaptada a tus necesidades
        </p>
        <div
          className={`bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto border-4 border-mmlgold relative transform transition-all duration-500 ${
            highlight ? "ring-4 ring-mmlgold scale-105" : ""
          }`}
        >
          <h4 className="text-3xl font-bold text-slate-800 mb-4">
            Redes sociales
          </h4>
          <p className="text-2xl text-mmlgold font-bold mb-4">
            140€ <span className="text-sm text-gray-600">/mes + IVA</span>
          </p>
          <ul className="text-gray-700 text-left space-y-2 text-sm mb-6">
            <li>✔️ Diseñador/a personal</li>
            <li>✔️ Contenido de Calidad y Creatividad</li>
            <li>✔️ Seguimiento de Tendencias y Actualizaciones</li>
            <li>✔️ Publicación promocionada mensual</li>
            <li>✔️ *Sin permanencia</li>
          </ul>
          <button
            onClick={scrollToFooter}
            className="bg-slate-800 text-white px-6 py-2 rounded hover:text-mmlgold transition text-sm"
          >
            CONTRATAR
          </button>
        </div>
      </motion.div>

      {/* ¿CÓMO LO HACEMOS? */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-6">
          ¿Cómo lo hacemos?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-left mt-6">
          {[
            {
              step: "1.",
              title: "Analizamos la notoriedad de tu marca",
              desc: "Estudiamos tu marca y los mejores canales para tus redes.",
            },
            {
              step: "2.",
              title: "Diseñamos la estrategia ideal para tus redes",
              desc: "Creamos estrategias personalizadas para generar notoriedad y fidelización.",
            },
            {
              step: "3.",
              title: "Generamos y publicamos contenido",
              desc: "Publicaciones atractivas para conectar con tus seguidores y aumentar interacción.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                <span className="text-mmlgold text-3xl">{item.step}</span>{" "}
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            const target = document.getElementById("formulario-contacto");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
          className="mt-8 bg-slate-800 text-white font-semibold px-6 py-3 rounded text-sm hover:text-mmlgold transition"
        >
          CONTACTAR
        </button>
      </motion.div>

      {/* PACK COMPLETO */}
      <motion.div
        ref={packRef}
        className="max-w-7xl mx-auto text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-2">
          Un pack completo
        </h3>
        <p className="text-base text-gray-700 mb-6">
          Descubre todo lo que realizamos para mejorar la imagen de tu marca en
          las redes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {item.icon}
              <h4 className="text-xl font-semibold mb-2 text-slate-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={scrollToPlanes}
            className="bg-slate-800 text-white px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            QUIERO RRSS
          </button>
        </div>
      </motion.div>
    </section>
  );
}

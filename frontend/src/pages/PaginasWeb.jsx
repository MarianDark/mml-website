import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaServer,
  FaPalette,
  FaShieldAlt,
  FaEnvelope,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";
import webImage1 from "../assets/images/web1.png";
import webImage2 from "../assets/images/web2.png";
import webImage3 from "../assets/images/web3.png";

export default function PaginasWeb() {
  const planesRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  const scrollToPlanes = () => {
    if (planesRef.current) {
      planesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlight(true);
      setTimeout(() => setHighlight(false), 3000);
    }
  };

  const features = [
    {
      icon: <FaServer className="text-mmlgold text-3xl mb-2" />,
      title: "Dominio & Hosting",
      desc: "Compramos el dominio ideal para tu negocio y lo alojamos en servidores seguros.",
    },
    {
      icon: <FaPalette className="text-mmlgold text-3xl mb-2" />,
      title: "Diseño web",
      desc: "Diseños web prácticos y 100% personalizados según las necesidades de tu negocio.",
    },
    {
      icon: <FaShieldAlt className="text-mmlgold text-3xl mb-2" />,
      title: "Toda la seguridad",
      desc: "Instalamos certificados SSL y reCAPTCHA para proteger tu web y tus usuarios.",
    },
    {
      icon: <FaEnvelope className="text-mmlgold text-3xl mb-2" />,
      title: "Mails corporativos",
      desc: "Creamos emails corporativos profesionales para ti y tu equipo.",
    },
    {
      icon: <FaMobileAlt className="text-mmlgold text-3xl mb-2" />,
      title: "Versión móvil",
      desc: "Adaptamos tu web para que funcione en móvil, tablet y computador.",
    },
    {
      icon: <FaTools className="text-mmlgold text-3xl mb-2" />,
      title: "Mantenimiento 24/7",
      desc: "Tu web protegida y actualizada todo el año por nuestro equipo técnico.",
    },
  ];

  useEffect(() => {
    if (window.location.hash === "#planes-web") {
      scrollToPlanes();
    }
  }, []);

  return (
    <section className="pt-40 px-6 bg-slate-100 text-gray-800 font-sans min-h-screen space-y-24">
      {/* HERO con imágenes al lateral */}
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 gap-7 items-center justify-center">
          <div className="col-span-10 grid grid-cols-3 gap-6">
            <img
              src={webImage1}
              alt="Diseño web 1"
              className="rounded-lg w-90 h-auto max-h-70 object-cover shadow-md"
            />
            <img
              src={webImage2}
              alt="Diseño web 2"
              className="rounded-lg w-40 h-auto max-h-40 object-cover shadow-md"
            />
          </div>
          <div className="col-span-2">
            <img
              src={webImage3}
              alt="Diseño web 3"
              className="rounded-lg w-80 h-auto max-h-80 object-cover shadow-md"
            />
          </div>
        </div>

        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold text-slate-800">Tu página web profesional</h2>
          <p className="text-gray-700 text-lg">
            Nuestros diseñadores crearán una página web personalizada a tu negocio y necesidades.
          </p>
          <button
            onClick={scrollToPlanes}
            className="bg-slate-800 text-white font-semibold px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            COMENZAR
          </button>
        </div>
      </motion.div>

      {/* PLAN DESTACADO */}
      <motion.div
        id="planes-web"
        ref={planesRef}
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold text-slate-800 mb-2">Nuestro servicio web</h3>
        <p className="text-lg mb-6">Tu página web profesional adaptada a las necesidades de tu negocio.</p>
        <div
          className={`bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto border-4 border-mmlgold relative transform transition-all duration-500 ${
            highlight ? "ring-4 ring-mmlgold scale-105" : ""
          }`}
        >
          <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg">DESTACADO</span>
          <h4 className="text-3xl font-bold text-slate-800 mb-4">Página web</h4>
          <p className="text-2xl text-mmlgold font-bold mb-4">35€ <span className="text-sm text-gray-600">/mes + IVA</span></p>
          <ul className="text-gray-700 text-left space-y-2 text-sm mb-6">
            <li>✔️ Asesor personal</li>
            <li>✔️ Dominio, hosting y seguridad</li>
            <li>✔️ Correos corporativos</li>
            <li>✔️ Fotografías y texto profesional</li>
            <li>✔️ Servicio todo incluido</li>
            <li>✔️ *Solo 1 año de permanencia</li>
          </ul>
          <button className="bg-slate-800 text-white px-6 py-2 rounded hover:text-mmlgold transition text-sm">
            CONTRATAR
          </button>
        </div>
      </motion.div>

      {/* ÍCONOS DE FUNCIONALIDADES */}
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Un plan todo incluido</h3>
        <p className="text-base text-gray-700 mb-10 max-w-2xl mx-auto">
          Descubre tu plan de página web con todo incluido. Sin sorpresas ni pagos extras.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              {item.icon}
              <h4 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={scrollToPlanes}
            className="bg-slate-800 text-white px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            QUIERO MI WEB
          </button>
        </div>
      </motion.div>
    </section>
  );
}

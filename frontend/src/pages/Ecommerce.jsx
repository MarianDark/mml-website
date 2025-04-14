import { motion } from "framer-motion";
import { useRef } from "react";
import ec1 from "../assets/images/ec1.png";
import ec2 from "../assets/images/ec2.png";
import ec3 from "../assets/images/ec3.png";
import {
  FaServer,
  FaPalette,
  FaShieldAlt,
  FaEnvelope,
  FaTruck,
  FaRocket
} from "react-icons/fa";

export default function Ecommerce() {
  const planRef = useRef(null);
  const todoIncluidoRef = useRef(null);

  const scrollToPlan = () => {
    if (planRef.current) {
      planRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToTodoIncluido = () => {
    if (todoIncluidoRef.current) {
      todoIncluidoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToFooter = () => {
    const formulario = document.getElementById("formulario-contacto");
    if (formulario) {
      formulario.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="pt-40 px-6 bg-slate-50 text-gray-800 font-sans min-h-screen space-y-24">
      {/* HERO */}
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <img src={ec1} alt="Ecommerce 1" className="rounded-lg w-[200px] h-[200px] shadow-md" />
            <img src={ec2} alt="Ecommerce 2" className="rounded-lg w-[180px] h-[200px] shadow-md" />
          </div>
          <img src={ec3} alt="Ecommerce 3" className="rounded-lg w-[200px] h-[200px] shadow-md" />
        </div>

        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold text-slate-800">Para vender, te lo ponemos fácil</h2>
          <p className="text-gray-700 text-lg">
            Consigue tu propia página web y tienda online para vender productos.
          </p>
          <button
            onClick={scrollToTodoIncluido}
            className="bg-slate-800 text-white font-semibold px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            COMENZAR
          </button>
        </div>
      </motion.div>

      {/* PLAN DESTACADO */}
      <motion.div
        ref={planRef}
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Nuestro servicio e-commerce, todo incluido</h3>
        <p className="text-base text-gray-700 mb-6">Ya puedes tener tu tienda online a un módico precio.</p>
        <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto border-4 border-mmlgold">
          <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg">DESTACADO</span>
          <h4 className="text-3xl font-bold text-slate-800 mb-4">E-commerce</h4>
          <p className="text-2xl text-mmlgold font-bold mb-4">38€ <span className="text-sm text-gray-600">/mes + IVA</span></p>
          <ul className="text-gray-700 text-left space-y-2 text-sm mb-6">
            <li>✔️ Asesor Personal</li>
            <li>✔️ Dominio, hosting y seguridad</li>
            <li>✔️ Correos corporativos</li>
            <li>✔️ Fotografías y texto profesional</li>
            <li>✔️ Servicio todo incluido</li>
            <li>✔️ *Solo 1 año de permanencia</li>
            <li>✔️ 300€ de entrada</li>
          </ul>
          <button
            onClick={scrollToFooter}
            className="bg-slate-800 text-white px-6 py-2 rounded hover:text-mmlgold transition text-sm"
          >
            CONTRATAR
          </button>
        </div>
      </motion.div>

      {/* CÓMO LO HACEMOS */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-2">¿Cómo lo hacemos?</h3>
        <p className="text-base text-gray-700 mb-10">3 sencillos pasos y tendrás tu Tienda Online funcionando.</p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              step: "1.",
              title: "Hablemos de tu negocio",
              desc: "Nos ponemos en contacto contigo para conocer tu negocio y los productos que quieres mostrar en la web.",
            },
            {
              step: "2.",
              title: "Nos ponemos manos a la obra",
              desc: "Nuestros técnicos comienzan a elaborar el diseño de tu página web.",
            },
            {
              step: "3.",
              title: "Entrega de la página web",
              desc: "En 15 días laborables tu web estará visible y lista para vender.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                <span className="text-mmlgold text-3xl">{item.step}</span> {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <button
          onClick={scrollToFooter}
          className="mt-8 bg-slate-800 text-white font-semibold px-6 py-3 rounded text-sm hover:text-mmlgold transition"
        >
          CONTACTAR
        </button>
      </motion.div>

      {/* TODO INCLUIDO */}
      <motion.div
        ref={todoIncluidoRef}
        className="max-w-7xl mx-auto text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Todo incluido</h3>
        <p className="text-base text-gray-700 mb-6">Descubre todo lo que incluye tu E-Commerce</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaServer className="text-mmlgold text-3xl mb-2" />,
              title: "Dominio & Hosting",
              desc: "Compramos el dominio ideal y lo alojamos en servidores con seguridad AENOR.",
            },
            {
              icon: <FaPalette className="text-mmlgold text-3xl mb-2" />,
              title: "Diseño web",
              desc: "Tiendas 100% personalizadas a las necesidades de tu negocio.",
            },
            {
              icon: <FaShieldAlt className="text-mmlgold text-3xl mb-2" />,
              title: "Toda la seguridad",
              desc: "SSL y reCAPTCHA para proteger tu web y tus usuarios.",
            },
            {
              icon: <FaEnvelope className="text-mmlgold text-3xl mb-2" />,
              title: "Mails corporativos",
              desc: "Emails profesionales para ti y tu equipo.",
            },
            {
              icon: <FaTruck className="text-mmlgold text-3xl mb-2" />,
              title: "Pagos y envío",
              desc: "Configuración de métodos de pago y envío en tu tienda.",
            },
            {
              icon: <FaRocket className="text-mmlgold text-3xl mb-2" />,
              title: "Mantenimiento 24/7",
              desc: "Tu web siempre activa, protegida y actualizada.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              {item.icon}
              <h4 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={scrollToPlan}
            className="bg-slate-800 text-white px-6 py-3 rounded text-sm hover:text-mmlgold transition"
          >
            QUIERO MI TIENDA ONLINE
          </button>
        </div>
      </motion.div>
    </section>
  );
}

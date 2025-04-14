import { useRef, useState } from "react";
import { motion } from "framer-motion";
import videoHero from "../assets/images/video.mp4";
import Counter from "../components/Counter";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaRocket,
  FaPause,
  FaPlay,
} from "react-icons/fa";

export default function Home() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* VIDEO */}
        <video
          ref={videoRef}
          src={videoHero}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Capa oscura */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* CONTENIDO */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white border-mmlgold border-2 p-2">
            Impulsa tu negocio con una{" "}
            <span className="text-mmlgold">web profesional</span>
          </h1>
          <p className="text-sm md:text-xl mb-6 max-w-xl">
            En <strong>MML STACK</strong> creamos y diseñamos páginas web que
            destacan y conectan con tus clientes.
          </p>
          <a
            href="#footer"
            className="inline-block bg-slate-800 text-white font-semibold px-4 py-2 rounded shadow-md transition text-sm md:text-base"
          >
            <span className="hover:text-mmlgold transition">
              ¡CONTÁCTANOS AHORA!
            </span>
          </a>
        </motion.div>

        {/* BOTÓN PLAY/PAUSE flotante */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-6 right-6 z-30 bg-white text-mmlgold rounded-full p-4 shadow-lg hover:scale-105 transition"
          title={paused ? "Reproducir" : "Pausar"}
        >
          {paused ? <FaPlay /> : <FaPause />}
        </button>
      </section>

      {/* SERVICIOS */}
      <motion.section
        id="servicecard"
        className="px-3 md:px-6 text-center scroll-mt-80" // <- ajusta aquí
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Nuestros Servicios
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Diseño Web Creativo"
            description="Diseños únicos, modernos y adaptados a tu marca."
          />
          <ServiceCard
            icon={<FaLaptopCode />}
            title="Desarrollo Responsive"
            description="Tu web se verá perfecta en móviles, tablets y computadoras."
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Optimización SEO"
            description="Posicionamos tu negocio para que más clientes te encuentren."
          />
        </div>
      </motion.section>

      {/* TESTIMONIOS */}
      <motion.section
        id="testimonialcard"
        className="px-3 md:px-6 text-center mt-8 scroll-mt-80" // <- ajusta aquí también
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Testimonios</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <TestimonialCard
            name="Carla Ruiz"
            message="Gracias a MML Stack ahora mi tienda vende el doble. ¡100% recomendados!"
            avatar="https://ui-avatars.com/api/?name=Carla+Ruiz&background=22c55e&color=fff&size=128"
          />
          <TestimonialCard
            name="Pedro López"
            message="Fueron rápidos, creativos y entendieron lo que yo quería para mi negocio."
            avatar="https://ui-avatars.com/api/?name=Pedro+Lopez&background=8a2b32&color=fff&size=128"
          />
          <TestimonialCard
            name="Laura Méndez"
            message="MML STACK creó la web de mis sueños. ¡Increíble trabajo!"
            avatar="https://ui-avatars.com/api/?name=Laura+Mendez&background=f97316&color=fff&size=128"
          />
        </div>
      </motion.section>

      {/* CONTADOR */}
      <motion.section
        className="bg-orange-50 py-6 px-2 md:px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Nuestra Experiencia
        </h2>
        <div className="grid gap-3 md:grid-cols-3 text-sm md:text-base">
          <div className="text-sm md:text-lg">
            <Counter label="Clientes Felices" target={34} />
          </div>
          <div className="text-sm md:text-lg">
            <Counter label="Proyectos Web" target={28} />
          </div>
          <div className="text-sm md:text-lg">
            <Counter label="Años de Experiencia" target={2} />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white border-mmlgold border-4 p-4">
            Impulsa tu negocio con una{" "}
            <span className="text-mmlgold">web profesional</span>
          </h1>
          <p className="text-lg md:text-4xl mb-8 max-w-2xl">
            En <strong>MML</strong> creamos y diseñamos páginas web que destacan
            y conectan con tus clientes.
          </p>
          <a
            href="#footer"
            className="inline-block bg-slate-800 text-white font-semibold px-8 py-4 rounded shadow-md transition text-xl"
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
        className="px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
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
      <motion.section className="px-6 md:px-16 text-center">
        <h2 className="text-6xl font-bold mb-8">Testimonios</h2>
        <div className="grid gap-6 md:grid-cols-3">
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
        className="bg-orange-50 py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-8">Nuestra Experiencia</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <Counter label="Clientes Felices" target={34} />
          <Counter label="Proyectos Web" target={28} />
          <Counter label="Años de Experiencia" target={2} />
        </div>
      </motion.section>
    </div>
  );
}

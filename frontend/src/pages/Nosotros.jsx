import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section className="pt-40 px-6 bg-slate-100 text-gray-800 font-sans min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-6xl font-bold mb-12 text-mmlgold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.p
          className="text-2xl md:text-4xl leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <span className="font-bold text-mmlgold">MML Stack</span> no solo creamos páginas web. Diseñamos{" "}
          <span className="italic">experiencias digitales</span> que inspiran, que venden y que cuentan la historia de tu negocio con impacto.
          <br /><br />
          Sabemos que hoy en día no basta con tener presencia en internet. Una web debe cautivar, comunicar, persuadir y, sobre todo,{" "}
          <span className="font-medium">funcionar como una poderosa herramienta de ventas</span>. Por eso, cada proyecto que desarrollamos combina diseño atractivo, estructura clara, contenido estratégico y tecnología de vanguardia.
          <br /><br />
          Somos un equipo apasionado por la innovación, el diseño y la funcionalidad. Nos dedicamos a ayudarte a{" "}
          <strong>transformar ideas en plataformas digitales sólidas</strong>, estéticamente impactantes y totalmente adaptadas a cualquier dispositivo.
          <br /><br />
          En <strong>MML Stack</strong>, creemos que una página web es mucho más que una vitrina:
          <br />
          ✨ Es tu carta de presentación al mundo. <br />
          📣 Es la voz de tu negocio cuando tú no estás. <br />
          💻 Es tu oficina virtual, abierta 24/7.
          <br /><br />
          Confía en nosotros para diseñar no solo tu sitio, sino{" "}
          <span className="font-semibold text-mmlgold">una experiencia digital completa</span> que impulse tu crecimiento y haga que tu marca deje huella.
        </motion.p>
      </div>
    </section>
  );
}
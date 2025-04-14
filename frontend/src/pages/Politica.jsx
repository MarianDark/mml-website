import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Politica() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="pt-40 px-6 bg-white text-gray-800 font-sans min-h-screen max-w-5xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-bold text-slate-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Política de Privacidad y Términos de Uso
      </motion.h1>

      <p>
        Sus datos serán tratados por <strong>MML Stack</strong> con el fin de poder suministrar la información o el pedido que nos ha solicitado. No serán comunicados a terceros ni se utilizarán para ninguna otra finalidad.
      </p>

      <p>
        En cumplimiento de la normativa (UE) 2016/679 Reglamento General de Protección de Datos, le informamos que puede ejercer su derecho de acceso, rectificación, supresión u oposición, enviando un correo electrónico a la dirección: <strong>hola@mml.com</strong> indicando el derecho que desea ejercer e identificándose convenientemente. También le informamos que puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que se han visto vulnerados sus derechos.
      </p>

      <p>
        Sus datos serán conservados mientras continúe existiendo una relación de servicios o ejerza usted su derecho de supresión antes de esa fecha. No prestar su consentimiento conllevará la imposibilidad de atender su solicitud de información.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Política de Contratación / Cancelación de los Servicios</h2>
      <p>
        Los servicios de <strong>SEO LOCAL</strong> y <strong>REDES SOCIALES</strong> contratados en <strong>MML Stack</strong> no tienen permanencia. No obstante, para solicitar la baja del servicio contratado el cliente se compromete a comunicarlo con un mínimo de 10-15 días de antelación.
      </p>
      <p>
        Si la baja se solicita en el mismo mes en curso, este mes se acabará de trabajar y se facturará. Esto lo hacemos porque el equipo técnico prepara el trabajo y material a realizar con antelación.
      </p>
      <p>
        En los Servicios de <strong>Página Web</strong> y <strong>Tienda Online</strong>:
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Precio y Forma de Pago</h2>
      <p>
        El precio será notificado en el contrato aceptado por ambas partes. La permanencia es de 12 meses. Se emitirá factura mensual al correo facilitado.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Vigencia y Plazo de Prestación</h2>
      <p>
        El contrato entra en vigor desde la aceptación con una permanencia de 12 meses.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Condiciones y Obligaciones</h2>
      <p>
        – Si el cliente solicita la baja antes de los 12 meses, debe abonar las mensualidades restantes. <br />
        – Si hay 2 impagos, se dará de baja y se reclamará el importe restante por vía legal.
      </p>
      <p>
        Esto es porque el prestador asume desde el primer día los costes de dominio, hosting y técnicos.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Política de Cookies</h2>
      <p>
        Esta Política de cookies explica qué son y cómo las usamos para mejorar la experiencia del usuario. Puede modificar su consentimiento en cualquier momento.
      </p>

      <p>
        Las cookies permiten que el sitio funcione correctamente, sea más seguro y eficiente. Recopilamos datos estadísticos, funcionales, de marketing y preferencias.
      </p>

      <p>
        Para más información visite: <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer" className="text-mmlgold underline">www.allaboutcookies.org</a>.
      </p>

      <h2 className="text-xl font-semibold text-mmlgold">Nuestra relación con marcas de terceros</h2>
      <p>
        <strong>MML Stack</strong> no pertenece ni está asociada con Alphabet Inc., Google, Microsoft, LinkedIn o Bing. Su uso en la web es ilustrativo para mostrar herramientas usadas o certificaciones.
      </p>

      <p className="mt-6 text-sm text-gray-600">Última actualización: Abril 2025</p>
    </section>
  );
}

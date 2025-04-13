
export default function Planes() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold text-slate-800 text-center">Nuestros Planes</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <PlanCard
          title="Básico"
          price="99€"
          features={[
            "1 Página de Inicio",
            "Diseño responsive",
            "Formulario de contacto",
            "Entrega en 5 días",
          ]}
        />
        <PlanCard
          title="Profesional"
          price="199€"
          features={[
            "Hasta 5 secciones",
            "Animaciones + SEO básico",
            "Integración con WhatsApp",
            "Entrega en 7 días",
          ]}
          highlighted
        />
        <PlanCard
          title="Premium"
          price="299€"
          features={[
            "Web personalizada completa",
            "SEO avanzado y Analytics",
            "Integración con base de datos",
            "Soporte por 1 mes",
          ]}
        />
      </div>
    </div>
  );
}

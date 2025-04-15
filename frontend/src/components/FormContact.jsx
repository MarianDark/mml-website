import { useState } from "react";
import axios from "axios";

export default function FormContact() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contactos", {
        nombre,
        telefono,
        email,
      });
      alert("¡Hemos recibido tus datos! Te contactaremos muy pronto!");
      setNombre("");
      setTelefono("");
      setEmail("");
      setAceptaTerminos(false);
    } catch (error) {
      console.error("Error al enviar datos", error);
      alert("Hubo un error al enviar datos");
    }
  };

  return (
    <form
      id="formulario-contacto"
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-8 rounded-xl shadow-lg"
    >
      <input
        type="text"
        placeholder="Nombre"
        className="border rounded px-4 py-2 w-full text-black"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Teléfono"
        className="border rounded px-4 py-2 w-full text-black"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border rounded px-4 py-2 w-full text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

<div className="text-left">
  <label className="flex items-center gap-80 text-sm text-gray-700">
    <input
      type="checkbox"
      checked={aceptaTerminos}
      onChange={(e) => setAceptaTerminos(e.target.checked)}
      className="accent-mmlgold"
      required
    />
    <span>
      Acepto los{" "}
      <a
        href="/politica"
        className="text-mmlgold underline hover:text-mmlgold"
      >
        Términos y Condiciones
      </a>
    </span>
  </label>
</div>

      <button
        type="submit"
        className="inline-block bg-slate-800 hover:text-mmlgold text-white font-semibold px-8 py-4 rounded shadow-md transition text-xl"
      >
        ¡TE LLAMAMOS!
      </button>
    </form>
  );
}

import whatsappIcon from '../assets/images/whatsapp.png'; // ajusta si estás en otra carpeta

export default function WhatsappButton() {
  return (
    <a 
      href="https://wa.me/34612345678?text=Hola%20MML" 
      className="fixed bottom-6 right-10 rounded-full p-10 shadow-lg z-50 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
    </a>
  );
}

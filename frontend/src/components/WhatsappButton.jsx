export default function WhatsappButton() {
    return (
      <a 
        href="https://wa.me/TUNUMERO?text=Hola%20MML" 
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="frontend/src/assets/images/580b57fcd9996e24bc43c543.png" alt="WhatsApp" className="w-8 h-8" />
      </a>
    );
  }
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919717661811";
  const message = encodeURIComponent("Hi, I would like to inquire about your prosthetic and orthotic solutions.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;

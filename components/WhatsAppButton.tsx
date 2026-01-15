
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../constants';

const WhatsAppButton: React.FC = () => {
  const message = "Hello, I'm interested in your security services. Can you help me?";
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center animate-whatsapp-pulse group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-slate-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-y-2 group-hover:translate-y-0">
        CHAT WITH US
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-slate-900 rotate-45"></div>
      </span>
    </a>
  );
};

export default WhatsAppButton;
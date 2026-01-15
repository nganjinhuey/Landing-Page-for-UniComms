import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/60108768760', '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
            <button
                onClick={openWhatsApp}
                className="flex items-center bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300 font-bold text-lg border-2 border-white ring-4 ring-[#25D366]/20 group overflow-hidden"
                aria-label="Chat with us on WhatsApp"
            >
                <div className="bg-white p-2 rounded-full text-[#25D366] relative z-10 shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pl-3 transition-all duration-500 ease-in-out origin-left">
                    Chat With Us
                </span>
            </button>
        </div>
    );
};

export default FloatingWhatsApp;

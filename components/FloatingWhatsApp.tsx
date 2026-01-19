import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const openWhatsApp = () => {
        window.open('https://wa.me/60108768760', '_blank');
    };

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex items-center justify-end cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={openWhatsApp}
        >
            <div
                className={`bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-[#20b858] flex items-center transition-all duration-300 ease-in-out ${isHovered ? 'pr-6 pl-4' : ''
                    }`}
            >
                <MessageCircle className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" strokeWidth={1.5} />

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${isHovered ? 'w-auto opacity-100 ml-3' : 'w-0 opacity-0'
                        }`}
                >
                    <span className="font-bold whitespace-nowrap text-base md:text-lg">Chat With Us</span>
                </div>
            </div>
        </div>
    );
};

export default FloatingWhatsApp;

import React from 'react';
import { ChevronDown } from 'lucide-react';

const UnprotectedStats: React.FC = () => {
    return (
        <section className="relative py-28 flex items-center justify-center overflow-hidden">
            {/* Background Image - Busy Hospital */}
            <div className="absolute inset-0 z-0">
                <img
                    src="hospital_lobby_busy.jpg"
                    alt="Busy public hospital waiting area in Malaysia"
                    className="w-full h-full object-cover blur-[1px]"
                />
                {/* Dark Overlay for Serious Tone */}
                <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
                    <span className="text-white block mb-4 text-3xl md:text-5xl font-bold tracking-normal opacity-90">78% of Malaysians are</span>
                    <span className="text-red-500 text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl block mt-2">UNPROTECTED</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium tracking-wide">
                    Many delay medical protection until it’s too late.
                </p>

                {/* Minimal Scroll Cue */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <ChevronDown className="w-8 h-8 text-white" />
                </div>
            </div>
        </section>
    );
};

export default UnprotectedStats;

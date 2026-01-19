import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Info, MessageCircle, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';

const OBJECTIONS = [
    "I'm still young and healthy.",
    "I don't think it's important right now.",
    "I don't understand how it works.",
    "The terms are too complicated."
];

const HeroV2: React.FC = () => {
    const [objectionIndex, setObjectionIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setObjectionIndex((prev) => (prev + 1) % OBJECTIONS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToJoin = () => {
        const element = document.getElementById('join-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        console.log("Opening WhatsApp...");
        window.open('https://wa.me/60108768760', '_blank');
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden">

            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="hero_students.png"
                    alt="Students and young adults community"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Gradient Overlay: Deep Brand Color (Left) -> Transparent (Right) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-teal-900/95 via-teal-900/80 to-transparent"></div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-3/5 text-left">
                        {/* Eyebrow Text - High Contrast */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-50 text-sm font-semibold mb-6 tracking-wide uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                            Ideal for Students, Young Adults & Families
                        </div>

                        {/* Headline - White Text */}
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-[1.15] drop-shadow-sm">
                            Worried About Medical Bills as a <span className="text-teal-300">Student or Young Adult?</span>
                        </h1>

                        {/* Rotating Objection - Light Red/Rose for contrast */}
                        <div className="h-8 mb-6 flex items-center">
                            <p key={objectionIndex} className="text-lg sm:text-2xl font-bold text-rose-300 italic animate-fade-in-up">
                                "{OBJECTIONS[objectionIndex]}"
                            </p>
                        </div>

                        {/* Supporting Sentence - Light Slate/White */}
                        <p className="text-lg text-slate-100 mb-10 leading-relaxed max-w-xl font-medium antialiased">
                            Affordable medical protection through a transparent, community-based sharing program — designed to be simple, fair, and easy to understand for students, families, and working adults in Malaysia.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Primary CTA - Bright Teal/White */}
                            <Button size="lg" variant="primary" className="rounded-xl px-8 shadow-[0_0_20px_rgba(45,212,191,0.3)] flex-1 sm:flex-none justify-center h-14 bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold border-none transition-all" onClick={scrollToJoin}>
                                Sign Up Now (Malaysians)
                            </Button>

                            {/* Secondary CTA - Glassmorphism */}
                            <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white/10 border border-white/30 hover:bg-white/20 text-white flex-1 sm:flex-none justify-center h-14 backdrop-blur-sm" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                                Tell Me More
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            {/* WhatsApp Link - Light Teal */}
                            <button
                                onClick={openWhatsApp}
                                className="flex items-center text-teal-200 hover:text-white font-semibold transition-colors gap-2 text-sm group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Chat with us on WhatsApp
                            </button>

                            {/* Divider (hidden on mobile) */}
                            <div className="hidden sm:block w-px h-6 bg-white/20"></div>

                            {/* No commitment text */}
                            <div className="flex items-center text-xs text-teal-100/80 font-medium">
                                <CheckCircle className="w-4 h-4 mr-2 text-teal-400" />
                                <span>No long-term commitment. No hidden charges.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side is empty to show the image, but we can keep the floating stats card if desired, 
                        or just let the image shine. The user asked to "merge the image into the background". 
                        I will subtly place the floating stats card in the bottom right or left corner of the content area if needed, 
                        but for now, a clean editorial look is best. 
                    */}
                </div>
            </div>

            {/* Optional: Floating Stats Card - Positioned absolutely at bottom right of the container for 'Editorial' feel */}
            <div className="absolute bottom-8 right-4 lg:bottom-12 lg:right-12 z-30 hidden sm:block">
                <div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 max-w-[240px] animate-fade-in-up">
                    <div className="flex flex-col items-start">
                        <div className="bg-teal-50 p-2 rounded-lg mb-3 text-teal-700 border border-teal-100/50">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <p className="text-2xl font-black text-teal-900 leading-none mb-1">
                            RM1,000,000
                        </p>
                        <p className="text-sm font-bold text-slate-700 leading-tight mb-0.5">Medical Protection</p>
                        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">From RM1/day</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;

import React, { useState, useEffect } from 'react';
import Button from './Button';
import { MessageCircle, ShieldCheck, CheckCircle } from 'lucide-react';

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

            {/* Gradient Overlay: White (Left) -> Transparent White (Right) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/70 to-white/20"></div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center h-full">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-3/5 text-left mb-10 lg:mb-0">
                        {/* Eyebrow Text - Brand Teal */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold mb-6 tracking-wide uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            Ideal for Students, Young Adults & Families
                        </div>

                        {/* Headline - Deep Navy with Teal Emphasis */}
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-brand-navy tracking-tight mb-4 leading-[1.15] drop-shadow-sm">
                            Worried About Medical Bills as a <span className="text-brand-teal">Student or Young Adult?</span>
                        </h1>

                        {/* Rotating Objection - Muted Red */}
                        <div className="h-8 mb-6 flex items-center">
                            <p key={objectionIndex} className="text-lg sm:text-2xl font-bold text-red-600/90 italic animate-fade-in-up">
                                "{OBJECTIONS[objectionIndex]}"
                            </p>
                        </div>

                        {/* Supporting Sentence - Dark Grey */}
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium antialiased">
                            Affordable medical protection through a transparent, community-based sharing program — designed to be simple, fair, and easy to understand for students, families, and working adults in Malaysia.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Primary CTA - Navy */}
                            <Button size="lg" variant="primary" className="rounded-xl px-8 shadow-xl shadow-brand-navy/10 flex-1 sm:flex-none justify-center h-14 bg-brand-navy hover:bg-brand-navy-light text-white font-bold border-none transition-all" onClick={scrollToJoin}>
                                Sign Up Now (Malaysians)
                            </Button>

                            {/* Secondary CTA - Outline/White */}
                            <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white/60 border border-slate-300 hover:bg-white hover:border-brand-teal text-brand-navy flex-1 sm:flex-none justify-center h-14 backdrop-blur-sm shadow-sm" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                                Tell Me More
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            {/* WhatsApp Link - Teal */}
                            <button
                                onClick={openWhatsApp}
                                className="flex items-center text-teal-700 hover:text-teal-900 font-semibold transition-colors gap-2 text-sm group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Chat with us on WhatsApp
                            </button>

                            {/* Divider (hidden on mobile) */}
                            <div className="hidden sm:block w-px h-6 bg-slate-300"></div>

                            {/* No commitment text */}
                            <div className="flex items-center text-xs text-slate-500 font-medium">
                                <CheckCircle className="w-4 h-4 mr-2 text-teal-600" />
                                <span>No long-term commitment. No hidden charges.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Stats Card - Positioned Bottom Left/Center, Reduced Prominence */}
                <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 z-30 hidden sm:block">
                    <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-white/60 max-w-[220px] animate-fade-in-up">
                        <div className="flex flex-col items-start">
                            <div className="bg-teal-50 p-1.5 rounded-lg mb-2 text-primary border border-teal-100/50">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <p className="text-xl font-black text-brand-navy leading-none mb-1">
                                RM1,000,000
                            </p>
                            <p className="text-sm font-bold text-slate-600 leading-tight mb-0.5">Medical Protection</p>
                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">From RM1/day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;

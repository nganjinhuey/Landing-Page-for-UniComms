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
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Brand-aligned gradient mesh - Cool, Calm, Trustworthy */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Dark Teal Anchor */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-[100px] mix-blend-multiply"></div>
                {/* Soft Blue-Green Transition */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-800/5 rounded-full blur-[100px] mix-blend-multiply"></div>
                {/* Light Mint Finish */}
                <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] bg-teal-100/40 rounded-full blur-[80px] mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        {/* Eyebrow Text - Inclusive & Premium */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100/60 text-teal-800 text-sm font-semibold mb-6 tracking-wide uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                            Ideal for Students, Young Adults & Families
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-2 leading-[1.15]">
                            Worried About Medical Bills as a <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-400">Student or Young Adult?</span>
                        </h1>

                        {/* Rotating Objection */}
                        <div className="h-8 mb-6 flex items-center">
                            <p key={objectionIndex} className="text-lg sm:text-xl font-bold text-red-600/90 italic animate-fade-in-up">
                                "{OBJECTIONS[objectionIndex]}"
                            </p>
                        </div>

                        {/* Supporting Sentence */}
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Affordable medical protection through a transparent, community-based sharing program — designed to be simple, fair, and easy to understand for students, families, and working adults in Malaysia.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Button size="lg" variant="primary" className="rounded-xl px-8 shadow-xl shadow-teal-900/10 flex-1 sm:flex-none justify-center h-12 bg-teal-900 border-none hover:bg-teal-800 transition-all hover:shadow-teal-900/20" onClick={scrollToJoin}>
                                Sign Up Now (Malaysians)
                            </Button>
                            <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white/80 border border-slate-200 hover:bg-white hover:border-teal-200 text-teal-900 flex-1 sm:flex-none justify-center h-12 backdrop-blur-sm" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                                Tell Me More
                            </Button>
                        </div>

                        {/* Text Link & Reassurance */}
                        <div className="flex flex-col items-start gap-4">
                            <button
                                onClick={openWhatsApp}
                                className="flex items-center text-teal-700 hover:text-teal-900 font-semibold transition-colors gap-2 text-sm group"
                            >
                                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                Chat with us on WhatsApp
                            </button>

                            <div className="flex items-center text-xs text-slate-500 font-medium">
                                <CheckCircle className="w-3 h-3 mr-1.5 text-teal-600" />
                                <span>No long-term commitment. No hidden charges.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 relative group">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-slate-50 rounded-2xl transform rotate-1 scale-105 opacity-60 blur-xl -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-4 ring-white/60 bg-slate-100">
                            <img
                                src="hero_students.png"
                                alt="Students and young adults enjoying community"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Compact Floating Proof Card */}
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 max-w-[200px] animate-fade-in-up">
                                <div className="flex flex-col items-start">
                                    <div className="bg-teal-50 p-1.5 rounded-lg mb-2 text-teal-700 border border-teal-100/50">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <p className="text-xl font-black text-teal-900 leading-none mb-1">
                                        RM1,000,000
                                    </p>
                                    <p className="text-sm font-bold text-slate-700 leading-tight mb-0.5">Medical Protection</p>
                                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">From RM1/day</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroV2;

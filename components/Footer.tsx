import React from 'react';
import Button from './Button';
import { HeartHandshake, Facebook, MapPin, Image as ImageIcon, Users, Globe } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Footer: React.FC = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/60108768760', '_blank');
    };

    return (
        <footer className="bg-brand-navy text-slate-300">

            {/* Redesigned CTA Section */}
            {/* Top Redesigned CTA Section - Dual Card Layout */}
            <div id="join-section" className="bg-sky-50 py-16 px-4 md:px-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                        {/* LEFT CARD — DIRECT REGISTRATION (Primary - Dark Theme) */}
                        <div className="bg-gradient-to-br from-brand-navy via-brand-navy to-teal-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-brand-teal/20 flex flex-col items-start relative overflow-hidden group">
                            {/* Subtle Glow Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none mix-blend-screen"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none mix-blend-screen"></div>

                            <div className="relative z-10 w-full">
                                <div className="inline-block bg-white/10 backdrop-blur-sm text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider border border-white/10">
                                    For Malaysians
                                </div>

                                <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
                                    Ready to Get <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Protected Today?</span>
                                </h2>

                                <p className="text-slate-300 text-lg mb-8 leading-relaxed border-l-2 border-brand-teal/50 pl-4">
                                    Join the We Kongsi community and start your medical protection from just <span className="font-bold text-white">RM1 a day</span>.
                                </p>

                                <div className="w-full mt-auto">
                                    <Button
                                        size="lg"
                                        className="w-full shadow-lg shadow-teal-500/30 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-brand-navy h-14 text-lg font-bold rounded-xl justify-center border-none"
                                        onClick={openWhatsApp}
                                    >
                                        Sign Up Now (Malaysians)
                                    </Button>
                                    <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                                        Join a community built on trust and shared responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD — INTEREST / LEARN MORE (Secondary - Light Theme) */}
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200 flex flex-col items-start relative overflow-hidden group hover:border-teal-300 transition-colors duration-300">
                            {/* Subtle Gradient Accent */}
                            <div className="absolute top-[-10%] right-[-10%] w-56 h-56 bg-teal-50 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 w-full">
                                <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                                    For Everyone
                                </div>

                                <h2 className="text-3xl font-bold text-slate-700 mb-4 leading-tight">
                                    Not Ready to <br />
                                    <span className="text-slate-900">Sign Up Yet?</span>
                                </h2>

                                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                                    Leave your details and we’ll help you understand how it works and notify you when registration is available.
                                </p>

                                <div className="w-full mt-auto">
                                    <Button
                                        size="lg"
                                        className="w-full !bg-teal-100 !text-[#01154f] hover:!bg-teal-200 hover:!text-[#01154f] h-14 text-lg font-extrabold rounded-xl justify-center border-none shadow-sm transition-colors"
                                        onClick={() => window.open('https://brand.wekongsi.com/widget/form/JO8rQlGhvRv0DlGWf0TI', '_blank')}
                                    >
                                        Register Interest
                                    </Button>
                                    <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                                        Suitable for international students & anyone exploring options.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <HeartHandshake className="w-8 h-8 text-brand-teal" />
                            <span className="font-bold text-2xl text-white">We Kongsi</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
                            Community-driven medical cost sharing. Affordable, Transparent, Fair. We are building a healthier nation together.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/wekongsi.health" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-navy transition-all flex items-center justify-center">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@wekongsi.official" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-navy transition-all flex items-center justify-center">
                                {/* TikTok SVG */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 shrink-0 text-brand-teal" />
                                <span>c/o WeWork Level 18, Kita Kongsi Sdn Bhd, Equatorial Plaza, Jln Sultan Ismail, 50250 Kuala Lumpur</span>
                            </li>
                            <li className="flex items-center text-white hover:text-brand-teal transition-colors">
                                <Globe className="w-5 h-5 mr-3 text-brand-teal" />
                                <a href="https://www.wekongsi.com" target="_blank" rel="noopener noreferrer">www.wekongsi.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Disclaimer (Moved here) */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Disclaimer</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                            We Kongsi is not an insurance company or takaful. Our program is driven by the voluntary agreement among members to share each other's medical expenses.
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            This membership does not function as an insurance policy. Members are responsible for their own expenses but share risks collectively.
                        </p>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} We Kongsi. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
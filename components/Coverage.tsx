import React from 'react';
import Section from './Section';
import { COVERAGE_ITEMS, CO_PAYMENT_CONDITIONS, CO_PAYMENT_COVERED, CO_PAYMENT_NOT_COVERED } from '../constants';
import { Check, X, Calendar, Banknote, ShieldCheck } from 'lucide-react';

const Coverage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Covered Items Grid - Revert to Screenshot Style (Light Blue) */}
            <section className="py-20 bg-blue-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Centered Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
                            What's Included in Your Coverage
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Comprehensive protection for peace of mind when you need it most.
                        </p>
                        <div className="w-24 h-1 bg-brand-navy mx-auto rounded-full mb-8"></div>

                        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-100 text-brand-blue text-sm font-bold tracking-wide shadow-sm">
                            * Waiting Period Applies
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
                        {COVERAGE_ITEMS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full justify-center border border-white hover:border-blue-100 group">
                                    <div className="mb-4 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={40} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm md:text-base font-bold text-brand-navy leading-tight">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* RM10 Benefit Section - Fresh Brand Layout */}
            <section className="py-20 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30 overflow-hidden relative">
                {/* Background Patterns */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#16647d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Top Row: Content Left, Image Right */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">

                        {/* Left: Text Content & Bubbles */}
                        <div className="lg:w-7/12 text-left">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-teal text-brand-navy text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border-2 border-white">
                                <ShieldCheck className="w-3 h-3 mr-1" /> Exclusive Perk
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight flex flex-wrap items-baseline gap-3">
                                <span>Malaysia's First</span>
                                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue leading-none transform translate-y-1 drop-shadow-sm">RM10</span>
                                <span className="w-full">Co-Payment Clinic Benefit</span>
                                <span className="text-xl md:text-2xl text-slate-500 font-semibold block mt-1 tracking-tight w-full">(Conditional Outpatient Benefit, COB)</span>
                            </h2>

                            <p className="text-lg text-slate-700 mb-8 max-w-xl leading-relaxed">
                                A value-added perk for early outpatient care. This <strong>Conditional Outpatient Benefit (COB)</strong> allows you to get treatment for common illnesses at just RM10 per clinic visit.
                            </p>

                            {/* Feature Bubbles - Clean Light Theme */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-teal-200/50 shadow-md hover:shadow-lg transition-all hover:bg-white">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-700">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Frequency</div>
                                        <div className="text-brand-navy font-bold text-lg leading-tight">Up to 2 visits / month</div>
                                        <div className="text-xs text-slate-400 mt-0.5">Max 6 visits per year</div>
                                    </div>
                                </div>

                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-teal-200/50 shadow-md hover:shadow-lg transition-all hover:bg-white">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-700">
                                        <Banknote className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Limit</div>
                                        <div className="text-brand-navy font-bold text-lg leading-tight">Claim RM300 / visit</div>
                                        <div className="text-xs text-slate-400 mt-0.5">Medication & Consultation</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image - image3.jpg */}
                        <div className="lg:w-5/12 relative flex justify-center lg:justify-end">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg aspect-[16/10] bg-teal-50 flex items-center justify-center group">
                                <img
                                    src="image3.jpg"
                                    alt="RM10 Clinic Benefit"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-100/40 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: 3 Cards Grid - Yellow, Green, Red */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1: Eligible Conditions (Soft Yellow) */}
                        <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-amber-100">
                            <div className="p-5 bg-amber-100/50 border-b border-amber-200 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center mr-3 text-amber-700 font-bold">
                                    <Check className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-amber-900 text-lg">Eligible Conditions</h3>
                            </div>
                            <div className="p-6 flex-1">
                                <ul className="space-y-3">
                                    {CO_PAYMENT_CONDITIONS.map((item, i) => (
                                        <li key={i} className="flex items-start text-amber-900 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-4 border-t border-amber-200">
                                    <p className="text-sm text-amber-800 font-bold bg-amber-200/50 px-3 py-2 rounded-lg inline-block">
                                        * Total 17 conditions eligible under COB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Covered Items (Green) */}
                        <div className="bg-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-emerald-100 relative z-10">
                            <div className="p-5 bg-emerald-100/50 border-b border-emerald-200 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center mr-3 text-emerald-700 font-bold">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-emerald-900 text-lg">Covered Items</h3>
                            </div>
                            <div className="p-6 flex-1">
                                <ul className="space-y-3">
                                    {CO_PAYMENT_COVERED.map((item, i) => (
                                        <li key={i} className="flex items-start text-emerald-900 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 3: Non-Covered Items (Red) */}
                        <div className="bg-red-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-red-100">
                            <div className="p-5 bg-red-100/50 border-b border-red-200 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3 text-red-600 font-bold">
                                    <X className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-red-900 text-lg">Not Covered Items</h3>
                            </div>
                            <div className="p-6 flex-1">
                                <ul className="space-y-3">
                                    {CO_PAYMENT_NOT_COVERED.map((item, i) => (
                                        <li key={i} className="flex items-start text-red-800 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coverage;
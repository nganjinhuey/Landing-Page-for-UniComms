import React from 'react';
import Section from './Section';
import { PAIN_POINTS } from '../constants';
import Button from './Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="bg-slate-50 relative overflow-hidden pt-24 pb-20">
      {/* Top Visual Separator - Soft Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-slate-50 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 px-4">
        {/* Section Label */}
        <div className="inline-block mb-6">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
            The Reality of Healthcare in Malaysia
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
          What Most People <span className="text-brand-blue">Overlook</span> About <br className="hidden md:block" /> Medical Protection
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The reality of healthcare in Malaysia is challenging. Are you prepared for the unexpected?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10 max-w-7xl mx-auto px-4">
        {PAIN_POINTS.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-teal/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-100 transition-colors duration-300">
                <Icon className="w-8 h-8 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3 text-center leading-tight">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-center">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center relative z-10 pb-6">
        <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white" onClick={scrollToJoin}>
          <ArrowRight className="w-4 h-4 mr-2" /> Start Your Protection Plan Now
        </Button>
      </div>
    </Section>
  );
};

export default PainPoints;
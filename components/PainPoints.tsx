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
    <Section className="bg-slate-50 relative overflow-hidden">
      {/* Contextual Image Strip (Top) */}
      <div className="absolute top-0 left-0 w-full h-64 z-0 opacity-10">
        <img
          src="hospital_corridor.jpg"
          alt="Hospital corridor background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 pt-10">What Most People Overlook About Medical Protection</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          The reality of healthcare in Malaysia is challenging. Are you prepared for the unexpected?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10 max-w-7xl mx-auto px-4">
        {PAIN_POINTS.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-brand-teal/50 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className={`w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 transition-colors duration-300`}>
                <Icon className={`w-6 h-6 text-slate-400 group-hover:text-brand-teal transition-colors`} />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3 leading-tight">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center relative z-10 pb-10">
        <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white" onClick={scrollToJoin}>
          <ArrowRight className="w-4 h-4 mr-2" /> Start Your Protection Plan Now
        </Button>
      </div>
    </Section>
  );
};

export default PainPoints;
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
    <Section className="bg-white relative overflow-hidden">
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
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-100 transition-colors duration-300">
                <Icon className="w-8 h-8 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3 text-center leading-tight">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-center">{point.description}</p>
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
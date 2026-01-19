import React from 'react';

const TransitionImage: React.FC = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            {/* Image */}
            <img
                src="doctor_patient.png"
                alt="Doctor consulting with patient in a reassuring setting"
                className="w-full h-full object-cover object-center"
            />

            {/* Soft White Overlay (25%) */}
            <div className="absolute inset-0 bg-white/25 mix-blend-overlay"></div>

            {/* Additional Soft Light Gradient for smooth transition to next section (optional but good for flow) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/20"></div>
        </section>
    );
};

export default TransitionImage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="logo.jpg"
                alt="We Kongsi Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className={`block font-bold text-xl text-brand-navy`}>We Kongsi</span>
                <span className={`block text-[10px] sm:text-xs font-medium text-brand-blue whitespace-nowrap`}>Anyone Can Afford Healthcare</span>
              </div>
            </Link>
          </div>

          {/* Right Side: Language Switcher & Action Button */}
          <div className="flex items-center gap-3 md:gap-4">



            {/* CTA Button - Links to WhatsApp */}
            <Button size="sm" className="shadow-md" onClick={() => window.open('https://wa.me/60108768760', '_blank')}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
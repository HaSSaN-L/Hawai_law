import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Scale } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center" id="hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero/law.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Stats Banner */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 text-amber-400">
            <Scale className="w-4 h-4" />
            <span className="text-sm font-medium">30+ Years of Legal Excellence</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Protecting Your</span>
            <span className="block text-amber-400">Rights & Interests</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Our team of experienced attorneys can help you navigate the complex legal landscape and protect your interests with dedication and expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-base sm:text-lg group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#practice-areas"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-base sm:text-lg backdrop-blur-sm"
            >
              Explore Our Services
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">30+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">1000+</p>
              <p className="text-sm text-gray-300">Cases Won</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">98%</p>
              <p className="text-sm text-gray-300">Client Satisfaction</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">50+</p>
              <p className="text-sm text-gray-300">Legal Experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <div className="w-1 h-8 rounded-full bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-amber-400 animate-scroll-down" />
        </div>
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
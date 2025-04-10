import React from 'react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-100" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}{' '}
            <span className="text-amber-400">Book a Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
            >
              <span>Book Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-900" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">{t('cta.callUs')}</p>
                <a href="tel:(06)5694445" className="text-lg font-semibold hover:text-amber-400 transition-colors">
                  (06) 5694445
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
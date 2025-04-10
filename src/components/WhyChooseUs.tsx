import React from 'react';
import { Award, Clock, Users2, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      titleKey: 'whyChooseUs.features.expertise.title',
      descriptionKey: 'whyChooseUs.features.expertise.description'
    },
    {
      icon: Clock,
      titleKey: 'whyChooseUs.features.availability.title',
      descriptionKey: 'whyChooseUs.features.availability.description'
    },
    {
      icon: Users2,
      titleKey: 'whyChooseUs.features.clientFocused.title',
      descriptionKey: 'whyChooseUs.features.clientFocused.description'
    },
    {
      icon: HeartHandshake,
      titleKey: 'whyChooseUs.features.proven.title',
      descriptionKey: 'whyChooseUs.features.proven.description'
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('whyChooseUs.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('whyChooseUs.subtitle')}
          </h2>
          <p className="text-gray-300 text-lg">
            {t('whyChooseUs.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400 transition-colors">
                <feature.icon className="w-8 h-8 text-amber-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-300">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
          >
            <span>{t('hero.consultation')}</span>
            <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
            <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
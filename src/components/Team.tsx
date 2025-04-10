import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { attorneys } from '../data/attorneys';

const Team = () => {
  const { t } = useTranslation();

  // Show only first 4 attorneys on homepage
  const displayedAttorneys = attorneys.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('team.title')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('team.subtitle')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t('team.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAttorneys.map((attorney, index) => (
            <div key={index} className="group h-full">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-full">
                  <img
                    src={attorney.image.src}
                    alt={attorney.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                        <a
                          href={`mailto:${attorney.email}`}
                          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                          aria-label={t('team.contact.email')}
                        >
                          <Mail className="w-4 h-4 text-gray-900" />
                        </a>
                        <a
                          href={`tel:${attorney.phone}`}
                          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                          aria-label={t('team.contact.phone')}
                        >
                          <Phone className="w-4 h-4 text-gray-900" />
                        </a>
                      </div>
                      <div className="text-white space-y-1 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500">
                        <p className="text-sm font-medium text-amber-400">Languages</p>
                        <p className="text-xs">{attorney.languages.join(" • ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-900/75 to-transparent">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-amber-400 font-medium text-sm">{attorney.position}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/75 to-transparent">
                  <p className="text-white text-sm">{attorney.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <a 
            href="/attorneys"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-base sm:text-lg group"
          >
            <span>View All Attorneys</span>
            <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
            <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
import React from 'react';
import { Scale, Building2, Users, Briefcase, GraduationCap, Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PracticeAreas = () => {
  const { t } = useTranslation();

  const practices = [
    {
      icon: Scale,
      titleKey: 'practiceAreas.areas.civil.title',
      descriptionKey: 'practiceAreas.areas.civil.description'
    },
    {
      icon: Building2,
      titleKey: 'practiceAreas.areas.corporate.title',
      descriptionKey: 'practiceAreas.areas.corporate.description'
    },
    {
      icon: Users,
      titleKey: 'practiceAreas.areas.family.title',
      descriptionKey: 'practiceAreas.areas.family.description'
    },
    {
      icon: Briefcase,
      titleKey: 'practiceAreas.areas.labor.title',
      descriptionKey: 'practiceAreas.areas.labor.description'
    },
    {
      icon: GraduationCap,
      titleKey: 'practiceAreas.areas.realEstate.title',
      descriptionKey: 'practiceAreas.areas.realEstate.description'
    },
    {
      icon: Gavel,
      titleKey: 'practiceAreas.areas.criminal.title',
      descriptionKey: 'practiceAreas.areas.criminal.description'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="practice-areas">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('practiceAreas.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('practiceAreas.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('practiceAreas.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors">
                <practice.icon className="w-7 h-7 text-amber-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t(practice.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(practice.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
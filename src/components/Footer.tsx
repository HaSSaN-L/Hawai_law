import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">{t('footer.tagline')}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <nav className="space-y-3">
              <Link to="/" className="block hover:text-amber-400 transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block hover:text-amber-400 transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/practice-areas" className="block hover:text-amber-400 transition-colors">
                {t('nav.practiceAreas')}
              </Link>
              <Link to="/attorneys" className="block hover:text-amber-400 transition-colors">
                {t('nav.attorneys')}
              </Link>
              <Link to="/blog" className="block hover:text-amber-400 transition-colors">
                {t('nav.blog')}
              </Link>
              <a href="#contact" className="block hover:text-amber-400 transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.practiceAreas')}</h4>
            <nav className="space-y-3">
              {Object.keys(t('practiceAreas.areas', { returnObjects: true })).map((key) => (
                <Link 
                  key={key}
                  to={`/practice-areas#${key}`} 
                  className="block hover:text-amber-400 transition-colors"
                >
                  {t(`practiceAreas.areas.${key}.title`)}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{t('footer.address')}</span>
                </div>
                <a href="https://maps.app.goo.gl/Yn86y25XoUkkjUp29" target="_blank" rel="noopener noreferrer" 
                   className="block text-gray-400 hover:text-amber-400 transition-colors">
                  {t('contact.sharjahAddress')}
                </a>
                <a href="https://maps.app.goo.gl/MzHt2cx28JqHg5DS7" target="_blank" rel="noopener noreferrer"
                   className="block text-gray-400 hover:text-amber-400 transition-colors mt-2">
                  {t('contact.dubaiAddress')}
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{t('contact.email')}</span>
                </div>
                <a href="mailto:hawailaw@eim.ae" 
                   className="block text-gray-400 hover:text-amber-400 transition-colors">
                  hawailaw@eim.ae
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{t('contact.phone')}</span>
                </div>
                <a href="tel:(06)5694445" 
                   className="block text-gray-400 hover:text-amber-400 transition-colors">
                  {t('contact.sharjahPhone')}: (06) 5694445
                </a>
                <a href="tel:(04)2868681"
                   className="block text-gray-400 hover:text-amber-400 transition-colors">
                  {t('contact.dubaiPhone')}: (04) 2868681
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
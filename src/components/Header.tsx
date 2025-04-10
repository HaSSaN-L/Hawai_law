import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex justify-between items-center">
          <Logo isMobile={true} />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center">
              {[
                { path: '/', label: 'nav.home' },
                { path: '/about', label: 'nav.about' },
                { path: '/practice-areas', label: 'nav.practiceAreas' },
                { path: '/attorneys', label: 'nav.attorneys' },
                { path: '/blog', label: 'nav.blog' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-3 py-1.5 mx-1 rounded-lg transition-colors whitespace-nowrap ${
                    isActive(item.path) 
                      ? 'text-amber-400 bg-white/5' 
                      : 'text-white hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-4 px-4 py-1.5 bg-amber-400 text-gray-900 rounded-lg font-semibold 
                  hover:bg-amber-500 transition-colors whitespace-nowrap"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg
              hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-[280px] bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-3 border-b border-white/10">
            <Logo isMobile={true} />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg
                hover:bg-white/10 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {[
              { path: '/', label: 'nav.home' },
              { path: '/about', label: 'nav.about' },
              { path: '/practice-areas', label: 'nav.practiceAreas' },
              { path: '/attorneys', label: 'nav.attorneys' },
              { path: '/blog', label: 'nav.blog' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block px-4 py-2.5 transition-colors ${
                  isActive(item.path) 
                    ? 'text-amber-400 bg-white/5' 
                    : 'text-white hover:text-amber-400 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="p-3 border-t border-white/10">
            <Link 
              to="/contact" 
              className="block w-full bg-amber-400 text-gray-900 px-4 py-2.5 rounded-lg font-semibold 
                hover:bg-amber-500 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
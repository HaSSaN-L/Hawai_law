import React from 'react';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isMobile?: boolean;
}

const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-1 sm:gap-1.5 group -ml-1">
      {/* Logo icon with animated background */}
      <div className={`relative flex items-center justify-center ${
        isMobile ? 'w-7 h-7' : 'w-8 h-8 sm:w-10 sm:h-10'
      } bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rotate-45 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Icon */}
        <Scale className={`${
          isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'
        } text-amber-400 relative z-10 transform group-hover:scale-110 transition-all duration-300`} />
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text with enhanced styling */}
      <div className="flex flex-row items-center">
        <span className={`${
          isMobile ? 'text-base' : 'text-lg'
        } font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 tracking-tight`}>
          Mahmoud
        </span>
        <span className={`${
          isMobile ? 'text-base' : 'text-lg'
        } font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 ml-0.5 tracking-tight`}>
          Al Hawai
        </span>
      </div>
    </Link>
  );
};

export default Logo;
import React from 'react';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  return (
    <div className="language-switcher relative">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Language: English"
      >
        <Languages className="w-5 h-5 text-amber-400" />
        <span className="font-medium">English</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
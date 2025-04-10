import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const consent = document.cookie.split(';').find(c => c.trim().startsWith('cookieConsent='));
        setIsVisible(!consent);
      } catch (error) {
        console.error('Error checking cookie consent:', error);
        setIsVisible(true);
      }
    };

    const timer = setTimeout(checkConsent, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    try {
      document.cookie = 'cookieConsent=accepted; path=/; max-age=31536000; secure; samesite=strict';
      setIsVisible(false);
    } catch (error) {
      console.error('Error setting cookie consent:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-900/95 backdrop-blur-sm text-white py-2 px-3 z-50 safe-area-bottom">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Cookie className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm truncate">
              We use cookies to enhance your experience.{' '}
              <Link to="/privacy-policy" className="text-amber-400 hover:text-amber-300 underline inline-block">
                Learn more
              </Link>
            </p>
          </div>
          <button
            onClick={handleAccept}
            className="flex-shrink-0 px-3 py-1.5 bg-amber-400 text-gray-900 rounded text-xs sm:text-sm font-medium hover:bg-amber-500 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      nameKey: 'testimonials.clients.sarah.name',
      positionKey: 'testimonials.clients.sarah.position',
      contentKey: 'testimonials.clients.sarah.content',
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      nameKey: 'testimonials.clients.ahmed.name',
      positionKey: 'testimonials.clients.ahmed.position',
      contentKey: 'testimonials.clients.ahmed.content',
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      nameKey: 'testimonials.clients.maria.name',
      positionKey: 'testimonials.clients.maria.position',
      contentKey: 'testimonials.clients.maria.content',
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      nameKey: 'testimonials.clients.mohammed.name',
      positionKey: 'testimonials.clients.mohammed.position',
      contentKey: 'testimonials.clients.mohammed.content',
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const handlePrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection('right');
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('testimonials.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('testimonials.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div 
              className={`bg-gray-50 p-8 rounded-2xl relative overflow-hidden transition-all duration-500 ${
                isAnimating ? `transform ${direction === 'right' ? '-translate-x-4 opacity-0' : 'translate-x-4 opacity-0'}` : 'translate-x-0 opacity-100'
              }`}
              style={{ minHeight: '400px' }}
            >
              <Quote className="w-12 h-12 text-amber-400/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={t(testimonials[currentIndex].nameKey)}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-amber-400 ring-offset-2"></div>
                </div>
                <div>
                  <h3 className="font-semibold">{t(testimonials[currentIndex].nameKey)}</h3>
                  <p className="text-gray-500 text-sm">{t(testimonials[currentIndex].positionKey)}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 relative z-10 leading-relaxed text-lg italic">
                "{t(testimonials[currentIndex].contentKey)}"
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              aria-label={t('testimonials.navigation.previous')}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              aria-label={t('testimonials.navigation.next')}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
                    currentIndex === index 
                      ? 'bg-amber-400 w-8' 
                      : 'bg-gray-300 hover:bg-amber-200'
                  }`}
                  aria-label={t('testimonials.navigation.goToSlide', { number: index + 1 })}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {t('testimonials.readyToExperience')}
            </h3>
            <p className="text-gray-600">
              {t('testimonials.joinClients')}
            </p>
          </div>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
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

export default Testimonials;
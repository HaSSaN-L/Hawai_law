import React, { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts'; // Importing blogPosts
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const postsPerPage = 3; // Reintroducing postsPerPage
  const totalPages = Math.ceil(blogPosts.length / postsPerPage); // Reintroducing totalPages

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1)); // Using totalPages
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1)); // Using totalPages
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visiblePosts = blogPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );



  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('blog.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('blog.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('blog.description')}
          </p>
        </div>

        <div className="relative">
          <div 
            className={`grid md:grid-cols-3 gap-8 transition-all duration-500 ${
              isAnimating ? `transform ${direction === 'right' ? '-translate-x-4 opacity-0' : 'translate-x-4 opacity-0'}` : 'translate-x-0 opacity-100'
            }`}
          >
            {visiblePosts.map((post, index) => (
              <article key={index} className="group">
                <Link to={`/blog/${post.id}`}> {/* Updated to use post.id */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={post.image}
                      alt={post.title} // Updated to use post.title
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors" aria-label={`Title: ${post.title}`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4" aria-label={`Excerpt: ${post.excerpt}`}>
                    {post.excerpt}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:text-amber-500 transition-colors"
                  >
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="w-4 h-4 ltr-only group-hover:translate-x-1 transition-transform" />
                    <ArrowRight className="w-4 h-4 rtl-only group-hover:-translate-x-1 transition-transform rotate-180" />
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            aria-label={t('blog.navigation.previous')}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            aria-label={t('blog.navigation.next')}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => ( // Using totalPages
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 'right' : 'left');
                  setCurrentPage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
                  currentPage === index 
                    ? 'bg-amber-400 w-8' 
                    : 'bg-gray-300 hover:bg-amber-200'
                }`}
                aria-label={t('blog.navigation.goToPage', { number: index + 1 })}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
          >
            <span>{t('blog.viewAll')}</span>
            <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
            <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

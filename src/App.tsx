import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import AttorneysPage from './pages/AttorneysPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FloatingButtons from './components/FloatingButtons';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppWidget from './components/WhatsAppWidget';
import CookieConsent from './components/CookieConsent';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Reset scroll position on page change
  React.useEffect(() => {
    document.getElementById('root')?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ScrollProgress />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <WhatsAppWidget isMobileMenuOpen={isMobileMenuOpen} />
      <CookieConsent />
    </>
  );
}

export default App;
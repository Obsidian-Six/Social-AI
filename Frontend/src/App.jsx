import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/Terms';

// Pages
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import Services from './components/Services';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Loved from './components/Loved';
import Ready from './components/Ready';
import ContactUs from './components/ContactUs';
import BlogPage from './components/Blogs/Blogs';
import BlogPostClient from './components/Blogs/BlogsPost';

// Component that listens for hash changes and smoothly scrolls to the target element
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // Small timeout to allow route rendering
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, [hash]);

  return null;
};

// Scroll to top on route (pathname) changes when there is no hash
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the URL contains a hash, prefer the hash-scrolling behavior
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const Home = () => (
  <main className="pt-20">
    <div id="home"><Hero /></div>
    <VideoPlayer />
    <div id="services"><Services /></div>
    <Features />
    <HowItWorks />
    <Loved />
    <div id="ready"><Ready /></div>
    <div id="contact"><ContactUs /></div>
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        {/* Handle hash scrolling after route changes */}
        <ScrollToHashElement />
        {/* Ensure route navigations without hashes scroll to top */}
        <ScrollToTop />

        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Dedicated pages that can also be accessed directly */}
          <Route path="/services" element={
            <main className="pt-20">
              <div id="services"><Services /></div>
            </main>
          } />

          <Route path="/contact" element={
            <main className="pt-20">
              <div id="contact"><ContactUs /></div>
            </main>
          } />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsOfService />} />
          <Route path="/blogs/:slug" element={<BlogPostClient />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

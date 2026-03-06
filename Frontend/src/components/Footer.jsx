import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastY = useRef(window.scrollY || 0);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll direction
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsScrollingUp(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observe footer visibility
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  const handleHashLink = (e, to) => {
    const parts = to.split('#');
    const path = parts[0] || '/';
    const id = parts[1];

    if (location.pathname === path) {
      e.preventDefault();
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // navigate programmatically to ensure the Router updates the URL with hash
      // and our ScrollToHashElement in App.jsx can handle the smooth scroll
      e.preventDefault();
      const target = path + (id ? `#${id}` : '');
      navigate(target);
    }
  };

  return (
    <motion.footer
      ref={ref}
      className="relative bg-white pt-20 pb-10 overflow-hidden font-sans"
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible && isScrollingUp ? { y: 0, opacity: 1 } : { y: 50, opacity: isVisible ? 0.9 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F02D8E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-[#F02D8E] to-[#E2006E] rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-black text-[#19183A] tracking-tight">SocialAI</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              AI-powered PR platform transforming how brands connect with media.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[#19183A] font-bold text-sm uppercase tracking-widest">Product</h4>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/#features" onClick={(e) => handleHashLink(e, '/#features')} className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block">Features</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link
                    to="/blogs"
                    onClick={(e) => {
                      if (location.pathname === '/blogs') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block"
                  >
                    Resources
                  </Link>
                </motion.li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#19183A] font-bold text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/#home" onClick={(e) => handleHashLink(e, '/#home')} className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block">About Us</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link
                    to="/blogs"
                    onClick={(e) => {
                      if (location.pathname === '/blog') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-500 hover:text-[#F02D8E] font-bold block"
                  >
                    Blog
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/#contact" onClick={(e) => handleHashLink(e, '/#contact')} className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block">Contact</Link>
                </motion.li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#19183A] font-bold text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/privacy-policy" className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block">Privacy Policy</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/terms-conditions" className="text-slate-500 hover:text-[#F02D8E] transition-colors font-medium block">Terms of Service</Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400 text-sm font-medium">
          © {currentYear} SocialAI. All rights reserved.
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFF0F5] rounded-full blur-[120px] -z-10 opacity-60" />
    </motion.footer> // Fixed closing tag here
  );
}
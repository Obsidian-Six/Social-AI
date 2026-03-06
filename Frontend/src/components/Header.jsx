import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, Newspaper, ArrowRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 px-5 md:px-12 py-3 md:py-5 flex items-center justify-between ${isScrolled || isMobileMenuOpen
      ? 'bg-white/95 backdrop-blur-lg shadow-md'
      : 'bg-transparent'
      }`}>

      {/* Logo Section - Always Visible */}
      <Link
        to="/"
        onClick={(e) => handleNavClick(e, 'home')}
        className="flex ml-5 items-center gap-2 group cursor-pointer z-[110]"
      >
        <div className="bg-[#ff1b8d] p-1.5 md:p-2 rounded-xl shadow-[0_0_15px_rgba(255,27,141,0.4)] transition-transform group-hover:rotate-12">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <span className="text-xl md:text-2xl font-bold text-[#ff1b8d] tracking-tight">
          SocialAI
        </span>
      </Link>

      {/* Desktop Navigation (Hidden on Mobile/Tablet) */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-8">
          <Link to="/" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-600 font-semibold hover:text-[#ff1b8d] transition-colors">About</Link>
          <Link to="/services" className="text-slate-600 font-semibold hover:text-[#ff1b8d] transition-colors">Services</Link>
          <Link to="/" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-600 font-semibold hover:text-[#ff1b8d] transition-colors">Contact</Link>
        </div>

        <Link to="/blogs">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#ff1b8d] text-white rounded-full font-bold shadow-lg hover:bg-[#e6157b] transition-all transform hover:scale-105 active:scale-95">
            <Newspaper className="w-4 h-4" />
            AI News
          </button>
        </Link>

        <Link to="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md">
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Mobile Toggle Button (Hidden on Desktop) */}
      <button
        className="lg:hidden p-2 text-[#ff1b8d] z-[110] transition-colors hover:bg-pink-50 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Panel (slides down below header; not full-screen) */}
      <div className={`absolute left-0 right-0 top-full lg:hidden bg-white/95 backdrop-blur-sm shadow-md z-[105] transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'}`}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            <button onClick={(e) => handleNavClick(e, 'home')} className="text-lg font-semibold text-slate-800 text-left py-2">About</button>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-800 py-2">Services</Link>
            <button onClick={(e) => handleNavClick(e, 'contact')} className="text-lg font-semibold text-slate-800 text-left py-2">Contact</button>

            <div className="mt-3 flex flex-col gap-3">
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#ff1b8d] text-white rounded-lg font-semibold">
                  <Newspaper className="w-5 h-5" /> AI News
                </button>
              </Link>

              <button onClick={(e) => handleNavClick(e, 'contact')} className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-semibold">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
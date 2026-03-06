import React from 'react';
import { Sparkles, Newspaper, ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-24 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-[#ff1b8d] text-sm font-semibold mb-8">
        <Sparkles className="w-4 h-4" />
        The AI-Powered PR Platform for AI Startups & Tech Businesses
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-4">
        Maximum Visibility for <br />
        <span className="text-[#ff1b8d]">AI Startups</span>
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl text-lg text-slate-500 leading-relaxed mb-10">
        Leading AI-powered PR platform connecting AI startups and tech 
        businesses with journalists, influencers, and media opportunities 
        worldwide. Get featured in top tech publications fast.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a
        href='https://api.whatsapp.com/send/?phone=917208263013&text&type=phone_number&app_absent=0'
        className="group relative flex items-center gap-2 px-8 py-4 bg-[#ff1b8d] text-white rounded-full font-bold text-lg shadow-[0_15px_30px_rgba(255,27,141,0.3)] hover:translate-y-[-2px] transition-all">
          Get Started Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <a
        href='https://api.whatsapp.com/send/?phone=917208263013&text&type=phone_number&app_absent=0'
        className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-pink-200 text-[#ff1b8d] rounded-full font-bold text-lg hover:bg-pink-50 transition-colors">
          Book a Demo
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Social Proof */}
      <p className="text-slate-400 font-medium text-sm tracking-wide">
        Join 500+ AI startups and tech companies using SocialAI for maximum media exposure
      </p>

      {/* Decorative background elements (Hexagons from image) */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <div className="relative w-32 h-32">
           <div className="absolute top-0 right-0 w-16 h-16 border-2 border-pink-400 rounded-lg rotate-45" />
           <div className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
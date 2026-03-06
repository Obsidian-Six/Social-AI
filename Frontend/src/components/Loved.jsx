import React from 'react';
import { Star, Award, TrendingUp, Users, BarChart3 } from 'lucide-react';

const stats = [
  { label: "Brands Served", value: "500+", icon: <Award className="w-5 h-5" /> },
  { label: "Media Impressions", value: "10M+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Client Satisfaction", value: "98%", icon: <Users className="w-5 h-5" /> },
  { label: "Average ROI", value: "3.5x", icon: <BarChart3 className="w-5 h-5" /> },
];

const tools = ["Salesforce", "HubSpot", "Slack", "Google Analytics", "Twitter/X", "LinkedIn"];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing at TechVision",
    content: "SocialAI transformed our PR strategy. We went from struggling to get coverage to being featured in tier-1 publications every week.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO at HealthTech Solutions",
    content: "The AI-powered insights helped us position our IPO perfectly. The media coverage exceeded our expectations by 300%.",
    avatar: "https://i.pravatar.cc/150?u=mike"
  },
  {
    name: "Emily Watson",
    role: "Chief Communications Officer at RetailBrand",
    content: "During our crisis, SocialAI's rapid response and strategic guidance saved our brand reputation. Truly invaluable.",
    avatar: "https://i.pravatar.cc/150?u=emily"
  }
];

const Loved = () => {
  return (
    <div className="bg-white">
      {/* Statistics Section (from image_998f46.png) */}
      <section className="py-20 border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Loved by <span className="text-pink-500">PR teams</span> everywhere
            </h2>
            <p className="text-slate-500 text-lg">See what our customers have to say about their results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border border-pink-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-pink-500 mb-6 gap-1 flex-row">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} fill="currentColor" size={16}/>
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t border-pink-50 pt-6">
                  <img 
                    src={t.avatar} 
                    className="w-12 h-12 rounded-full border-2 border-pink-100 object-cover" 
                    alt={t.name} 
                  />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section (from image_8f2a17.png) */}
      <section className="py-24 bg-white border-t border-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Integrates with your <span className="text-pink-500">favorite tools</span>
          </h2>
          <p className="text-slate-500 mb-12">Seamlessly connect with the tools you already use</p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <div 
                key={tool} 
                className="px-8 py-4 rounded-2xl border border-pink-100 text-slate-700 font-semibold text-lg hover:bg-pink-50 transition-colors cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loved;
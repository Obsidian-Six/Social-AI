import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, Users, Globe, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "AIPR and Media Placement",
    tagline: "YOUR AI BUSINESS FEATURED GLOBALLY",
    description: "Get your AI business featured in top global media outlets such as Forbes, Business Insider, and 1,000+ renowned websites and news articles worldwide.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
    icon: <Megaphone className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600",
    tags: ["Forbes", "Business Insider", "1,000+ outlets"]
  },
  {
    title: "Influencer Outreach",
    tagline: "CONNECT WITH AI NICHE LEADERS",
    description: "Connect and collaborate with over 5,000 AI niche influencers across platforms like LinkedIn, X (formerly Twitter), YouTube, Reddit, and Instagram.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    tags: ["5,000+ Influencers", "AI niche", "Multi-platform"]
  },
  {
    title: "Online Presence Boost",
    tagline: "MAXIMIZE YOUR BRAND VISIBILITY",
    description: "Maximize your brand's visibility and credibility on the internet by leveraging high-impact publicity and connections in the AI industry.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    icon: <Globe className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    tags: ["High-impact", "Industry connections", "Credibility"]
  },
  {
    title: "Reputation Building",
    tagline: "BECOME AN AI INDUSTRY LEADER",
    description: "Position your business as a leader in the AI space through authoritative mentions, interviews, and features in respected media and social channels.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop",
    icon: <Award className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600",
    tags: ["Authority", "Interviews", "Leader status"]
  },
  {
    title: "Targeted AI Audience Growth",
    tagline: "REACH DECISION MAKERS",
    description: "Attract more attention from decision-makers, potential clients, and industry peers by promoting your story to the right audience in the AI sector.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    icon: <Target className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
    tags: ["Decision-makers", "Targeted reach", "AI sector"]
  }
];

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0f1115] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row group hover:border-white/10 transition-colors"
    >
      <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
        />
        <div className={`absolute top-8 left-8 p-4 rounded-2xl bg-linear-to-br ${service.color} shadow-lg ring-1 ring-white/20`}>
          <div className="text-white">{service.icon}</div>
        </div>
        <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
        <span className={`text-[11px] font-black tracking-[0.25em] uppercase mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
          {service.tagline}
        </span>
        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
          {service.title}
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
          to ="/#contact"
          className={`flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg`}>
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
          to = "/#contact"
          className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="relative bg-[#000000] py-32 overflow-hidden w-full">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[15%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            Your AI Business
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Services of <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Social AI</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-xl leading-relaxed">
            Unlock unprecedented growth with our exclusive AI-focused PR services. 
            <span className="text-white font-semibold block mt-4 border-b-2 border-pink-500/50 inline-block pb-1 cursor-pointer hover:border-pink-500 transition-all">
               Your success story starts here.
            </span>
          </p>
        </div>

        {/* Services Stack */}
        <div className="flex flex-col gap-16 mb-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* --- Ready to Dominate CTA Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-[2px] rounded-[2rem] bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="bg-[#0f1115] rounded-[2rem] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to dominate the AI industry?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Join hundreds of AI startups getting featured in top publications and connecting with key decision-makers.
            </p>
            
            <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Claim Your Spot Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
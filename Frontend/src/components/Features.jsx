import React from 'react';
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart4, 
  Users2, 
  Share2 
} from 'lucide-react';

const features = [
  {
    title: "AI-Powered Media Matching",
    description: "Our intelligent algorithms analyze millions of journalist profiles and past coverage to match your story with the perfect media contacts in seconds.",
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  },
  {
    title: "Strategic Brand Positioning",
    description: "Data-driven positioning strategies that differentiate your brand and establish thought leadership in your industry.",
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  },
  {
    title: "Real-Time Crisis Management",
    description: "24/7 AI monitoring with rapid response protocols to protect your reputation and manage any crisis before it escalates.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  },
  {
    title: "Performance Analytics",
    description: "Track every mention, measure sentiment, and prove ROI with comprehensive analytics dashboards and real-time reporting.",
    icon: <BarChart4 className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  },
  {
    title: "Influencer Partnerships",
    description: "AI-powered matching connects you with authentic influencers who align with your brand values and reach your target audience.",
    icon: <Users2 className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  },
  {
    title: "Multi-Channel Distribution",
    description: "Seamlessly distribute your message across press releases, social media, podcasts, and traditional media channels.",
    icon: <Share2 className="w-6 h-6 text-white" />,
    color: "bg-[#ff1b8d]"
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Everything AI startups need to <br />
            <span className="text-[#ff1b8d]">amplify their brand</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
            Powerful AI-driven PR features designed to help tech startups secure more media 
            coverage, build journalist relationships, and measure your PR impact with precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-10 rounded-4xl border border-pink-50 bg-white hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 flex flex-col items-start text-left group"
            >
              <div className={`${feature.color} p-4 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
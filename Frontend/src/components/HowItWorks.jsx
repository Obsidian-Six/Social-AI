import React from 'react';
import { motion } from 'framer-motion';

const m = motion;
console.log(m);

const steps = [
  {
    number: "01",
    title: "Connect Your Brand",
    description: "Import your brand assets, key messages, and target audience data. Our AI learns your unique story and positioning."
  },
  {
    number: "02",
    title: "AI Matches You With Media",
    description: "Our intelligent system analyzes millions of journalists, podcasts, and influencers to find perfect matches for your story."
  },
  {
    number: "03",
    title: "Launch & Track Campaigns",
    description: "Send personalized pitches at scale, track engagement, and measure your media coverage with real-time analytics."
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            How <span className="text-[#ff1b8d]">SocialAI</span> works
          </h2>
          <p className="text-slate-500 text-lg">
            Get started in minutes and watch your media coverage grow
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-10 group"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff1b8d] to-[#d4147d] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Text Content */}
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
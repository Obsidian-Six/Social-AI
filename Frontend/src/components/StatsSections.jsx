import React from 'react';
import { Award, TrendingUp, Star, BarChart3 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Award className="w-6 h-6 text-[#ff1b8d]" />,
      value: "500+",
      label: "Brands Served",
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6 text-[#ff1b8d]" />,
      value: "10M+",
      label: "Media Impressions",
    },
    {
      id: 3,
      icon: <Star className="w-6 h-6 text-[#ff1b8d]" />,
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      id: 4,
      icon: <BarChart3 className="w-6 h-6 text-[#ff1b8d]" />,
      value: "3.5x",
      label: "Average ROI",
    },
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group">
              {/* Icon Container with soft pink background */}
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                {stat.icon}
              </div>
              
              {/* Stats Value */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-slate-500 font-semibold text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
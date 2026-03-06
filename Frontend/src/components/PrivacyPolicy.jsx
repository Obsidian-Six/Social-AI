import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "November 16, 2025";

  const sections = [
    {
      title: "Introduction",
      content: "SocialAI (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered PR platform and services."
    },
    {
      title: "Information We Collect",
      isList: true,
      subsections: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you provide directly to us, including:",
          items: [
            "Name, email address, phone number, and company information",
            "Account credentials and profile information",
            "Payment and billing information",
            "Communications and correspondence with us"
          ]
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your device and how you interact with our services:",
          items: [
            "Device information (IP address, browser type, operating system)",
            "Usage data (pages visited, features used, time spent)",
            "Cookies and similar tracking technologies"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      isList: true,
      items: [
        "Provide, maintain, and improve our services",
        "Process your transactions and send related information",
        "Send you technical notices, updates, and support messages",
        "Respond to your comments and questions",
        "Provide personalized content and recommendations",
        "Monitor and analyze trends, usage, and activities",
        "Detect, prevent, and address technical issues and fraud"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell your personal information. We may share your information with service providers who perform services on our behalf, to comply with legal obligations, or in connection with a business transfer."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information. However, no internet transmission is completely secure, and we cannot guarantee absolute security."
    },
    {
      title: "Your Rights",
      isList: true,
      items: [
        "Access, update, or delete your personal information",
        "Object to or restrict processing of your data",
        "Data portability and right to withdraw consent",
        "Lodge a complaint with a supervisory authority"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F02D8E]/5 border border-[#F02D8E]/10 text-[#F02D8E] text-[10px] font-black uppercase tracking-widest mb-6">
          <ShieldCheck size={14} /> Privacy & Data Protection
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm font-medium">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* CONTENT GRID */}
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {sections.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#F02D8E] rounded-full" />
              {section.title}
            </h2>
            
            {section.content && (
              <p className="text-slate-600 leading-relaxed text-lg">
                {section.content}
              </p>
            )}

            {section.subsections ? (
              <div className="space-y-8">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-lg font-bold mb-3 text-slate-800">{sub.subtitle}</h3>
                    <p className="text-slate-600 mb-4">{sub.text}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-[#F02D8E] mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : section.isList && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-2xl text-slate-700 text-sm border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F02D8E] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* CONTACT SECTION */}
        <div className="bg-[#0A0A0A] text-white rounded-[40px] p-10 md:p-16 mt-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F02D8E]/20 rounded-full blur-[100px] -z-0" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-[#F02D8E] mb-2"><Mail size={24} /></div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Email</p>
                <p className="text-sm font-bold">hello@socialai.com</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#F02D8E] mb-2"><Phone size={24} /></div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Phone</p>
                <p className="text-sm font-bold">+91 7208263013</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#F02D8E] mb-2"><MapPin size={24} /></div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Address</p>
                <p className="text-sm font-bold leading-snug">
                  3rd floor, Inspire BKC, BKC Rd, Mumbai 400051, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
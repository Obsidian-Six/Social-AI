import React from 'react';
import { Scale, ShieldAlert, Globe, CreditCard, Zap, HelpCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "November 16, 2025";

  const sections = [
    {
      title: "Agreement to Terms",
      icon: <Scale size={20} />,
      content: "By accessing or using SocialAI's services (\"Services\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use our Services."
    },
    {
      title: "Services Description",
      icon: <Zap size={20} />,
      isList: true,
      items: [
        "Media matching and journalist outreach services",
        "AI influencer network connections (5,000+ influencers)",
        "Press release distribution and media placement",
        "Brand positioning and reputation management",
        "Analytics and reporting tools",
        "Crisis management support"
      ]
    },
    {
      title: "User Accounts",
      icon: <Globe size={20} />,
      isList: true,
      text: "To use our Services, you must:",
      items: [
        "Be at least 18 years old or have parental consent",
        "Provide accurate and complete registration information",
        "Maintain the security of your account credentials",
        "Promptly update your account information as needed",
        "Accept responsibility for all activities under your account"
      ]
    },
    {
      title: "Acceptable Use",
      icon: <ShieldAlert size={20} />,
      isList: true,
      text: "You agree not to violate laws, infringe on IP, transmit harmful content, spam journalists, reverse engineer our Services, or share account credentials.",
      items: [
        "No illegal activity or intellectual property infringement",
        "No transmission of harmful or offensive content",
        "No harassment of journalists or influencers",
        "No hacking or competitive use of Services",
        "No sharing of credentials or providing false info"
      ]
    },
    {
      title: "Payment Terms",
      icon: <CreditCard size={20} />,
      subsections: [
        {
          subtitle: "Fees and Billing",
          items: [
            "Fees are billed in advance (monthly/annually)",
            "All payments are non-refundable except as required by law",
            "Pricing changes require 30 days' notice"
          ]
        },
        {
          subtitle: "Cancellation",
          items: [
            "Cancel anytime; effect at end of billing period",
            "No refunds for partial months or unused features"
          ]
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: "All content and functionality are owned by SocialAI. You retain ownership of your content but grant us a license to use and distribute it to provide our Services."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account immediately for violations of these Terms, fraudulent activity, non-payment, or harm to our users."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F02D8E]/5 border border-[#F02D8E]/10 text-[#F02D8E] text-[10px] font-black uppercase tracking-widest mb-6">
          <Scale size={14} /> Legal Documentation
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
          Terms of Service
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
            className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#F02D8E]/10 flex items-center justify-center text-[#F02D8E]">
                {section.icon || <HelpCircle size={20} />}
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
            </div>
            
            {section.content && (
              <p className="text-slate-600 leading-relaxed text-lg mb-4">
                {section.content}
              </p>
            )}

            {section.text && (
              <p className="text-slate-600 mb-6 font-medium">{section.text}</p>
            )}

            {section.subsections ? (
              <div className="space-y-8">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#F02D8E] mb-4">{sub.subtitle}</h3>
                    <ul className="space-y-3">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-3 text-slate-600 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <span className="w-1 h-1 rounded-full bg-[#F02D8E]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : section.isList && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/50 text-slate-700 text-sm border border-slate-100">
                    <span className="text-[#F02D8E] font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* GOVERNING LAW MINI-CARD */}
        <div className="bg-slate-900 text-white rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Governing Law</h3>
            <p className="text-slate-400 text-sm">Subject to the laws of Mumbai, Maharashtra, India.</p>
          </div>
          <Link to="/" className="px-6 py-3 bg-[#F02D8E] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Back to Home
          </Link>
        </div>

        {/* CONTACT FOOTER */}
        <div className="pt-12 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><Mail size={18} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Email</p>
                <p className="text-sm font-bold">hello@socialai.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><Phone size={18} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Phone</p>
                <p className="text-sm font-bold">+91 7208263013</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><MapPin size={18} /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Address</p>
                <p className="text-sm font-bold">BKC, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
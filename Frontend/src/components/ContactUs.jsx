import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Added status state to track 'success' or 'error'
  const [status, setStatus] = useState({ type: null, message: "" }); 

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Company: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" }); // Clear previous status

    try {
      const response = await fetch("https://sheetdb.io/api/v1/emxktcawb03m7", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              ...formData,
              Date: new Date().toLocaleString(),
            },
          ],
        }),
      });

      if (response.ok) {
        // Updated: Set success status instead of alert
        setStatus({ type: "success", message: "Message received! We'll be in touch soon." });
        setFormData({ Name: "", Email: "", Company: "", Message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("SheetDB Error:", error);
      // Updated: Set error status instead of alert
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#19183A] mb-4">
            Get in <span className="text-[#F02D8E]">touch</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Have questions? Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <h3 className="text-3xl font-bold text-[#19183A] mb-8">Contact Information</h3>
            <div className="space-y-8">
              <ContactCard icon={<FiMail size={24} />} label="Email" value="hello@socialai.com" isLink={true} />
              <ContactCard icon={<FiPhone size={24} />} label="Phone" value="+91 7208263013" />
              <ContactCard icon={<FiMapPin size={24} />} label="Office" value={<>3rd floor, Inspire BKC Rd, G Block BKC<br />Mumbai, Maharashtra 400051</>} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative" // Added 'relative' to contain the overlay
          >
            {/* ANIMATED STATUS OVERLAY */}
            <AnimatePresence>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`absolute inset-0 z-50 flex flex-col items-center justify-center text-center p-8 rounded-3xl backdrop-blur-md ${
                    status.type === 'success' ? 'bg-white/90' : 'bg-red-50/90'
                  }`}
                >
                  <button 
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <FiX size={24} />
                  </button>

                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                    status.type === 'success' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                  }`}>
                    {status.type === 'success' ? <FiCheckCircle size={40} /> : <FiAlertCircle size={40} />}
                  </div>

                  <h4 className={`text-2xl font-bold mb-2 ${status.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                    {status.type === 'success' ? 'Message Sent!' : 'Submission Failed'}
                  </h4>
                  <p className="text-slate-600 max-w-xs">{status.message}</p>

                  <button
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="mt-8 px-8 py-3 bg-[#19183A] text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                  >
                    {status.type === 'success' ? 'Send another' : 'Try again'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM REMAINS UNCHANGED */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#19183A]">Name *</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-xl border border-pink-100 bg-white focus:ring-2 focus:ring-[#F02D8E]/20 focus:border-[#F02D8E] outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#19183A]">Email *</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl border border-pink-100 bg-white focus:ring-2 focus:ring-[#F02D8E]/20 focus:border-[#F02D8E] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#19183A]">Company</label>
                <input
                  type="text"
                  name="Company"
                  value={formData.Company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-6 py-4 rounded-xl border border-pink-100 bg-white focus:ring-2 focus:ring-[#F02D8E]/20 focus:border-[#F02D8E] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#19183A]">Message *</label>
                <textarea
                  name="Message"
                  required
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-pink-100 bg-white focus:ring-2 focus:ring-[#F02D8E]/20 focus:border-[#F02D8E] outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#F02D8E] to-[#E2006E] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-pink-500/30 disabled:opacity-70 transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend className={isSubmitting ? "animate-bounce" : ""} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, isLink }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-[#FFF0F5] text-[#F02D8E] transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        {isLink ? (
          <a href={`mailto:${value}`} className="text-lg font-bold text-[#19183A] hover:text-[#F02D8E] transition-colors">
            {value}
          </a>
        ) : (
          <div className="text-lg font-bold text-[#19183A] leading-relaxed">{value}</div>
        )}
      </div>
    </div>
  );
}
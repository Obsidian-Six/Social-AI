import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added motion
import { GoArrowUpRight } from 'react-icons/go';
import { FiCheckCircle, FiX } from 'react-icons/fi'; // Icons for success state

export default function BlogSidebarForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Company: '',
    Message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // We map id to the capitalized keys for consistency with your SheetDB setup
    const key = id.charAt(0).toUpperCase() + id.slice(1);
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
        setIsSubmitted(true);
        setFormData({ Name: '', Email: '', Company: '', Message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden"> {/* Container to hold the overlay */}
      
      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[60] bg-white flex flex-col items-center justify-center text-center p-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="w-16 h-16 bg-pink-50 text-[#F02D8E] rounded-full flex items-center justify-center mb-4"
            >
              <FiCheckCircle size={32} />
            </motion.div>
            <h3 className="text-[#19183A] font-black text-xs uppercase tracking-widest mb-2">
              Enquiry Sent!
            </h3>
            <p className="text-slate-500 text-[10px] leading-relaxed mb-6">
              Our AI experts will review your request and get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[#F02D8E] font-black text-[9px] uppercase tracking-widest hover:underline"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ORIGINAL FORM UI */}
      <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1" htmlFor="name">
            Name *
          </label>
          <input
            required
            className="border border-slate-200 p-2.5 text-xs outline-none w-full focus:border-[#F02D8E] transition-all bg-white text-black"
            id="name"
            type="text"
            placeholder="Your full name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1" htmlFor="email">
            Email *
          </label>
          <input
            required
            className="border border-slate-200 p-2.5 text-xs outline-none w-full focus:border-[#F02D8E] transition-all bg-white text-black"
            id="email"
            type="email"
            placeholder="abc@company.com"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1" htmlFor="company">
            Company
          </label>
          <input
            className="border border-slate-200 p-2.5 text-xs outline-none w-full focus:border-[#F02D8E] transition-all bg-white text-black"
            id="company"
            type="text"
            placeholder="Company Name"
            value={formData.Company}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1" htmlFor="message">
            Message *
          </label>
          <textarea
            required
            rows={4}
            className="border border-slate-200 p-2.5 text-xs outline-none w-full focus:border-[#F02D8E] transition-all bg-white text-black resize-none"
            id="message"
            placeholder="How can we help scale your AI?"
            value={formData.Message}
            onChange={handleChange}
          />
        </div>

        <div className="pt-2 relative z-50">
          <button
            disabled={isSubmitting}
            className="w-full font-black text-[11px] uppercase tracking-[0.2em] py-4 text-white bg-[#F02D8E] hover:bg-[#c80064] transition-all flex items-center justify-center gap-2 group shadow-lg active:scale-[0.98] disabled:opacity-70"
            type="submit"
          >
            {isSubmitting ? "Sending..." : (
              <>
                Get Started <GoArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
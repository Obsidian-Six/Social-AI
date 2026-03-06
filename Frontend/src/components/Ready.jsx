import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Ready() {
  const ref = useRef(null);

  // 1. Mouse Tracking Logic for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden flex justify-center items-center font-sans">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-4xl min-h-[450px] rounded-[40px] bg-[#FFF0F5] flex flex-col items-center justify-center p-8 md:p-16 text-center border border-pink-100 shadow-2xl shadow-pink-200/20"
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200/30 to-transparent blur-3xl"
          />
        </div>

        {/* Content Layer (Popped forward on Z-axis) */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#19183A] mb-4 tracking-tight">
            Ready to transform your <br />
            <span className="text-[#F02D8E]">PR strategy?</span>
          </h2>

          <p className="text-lg md:text-xl text-[#19183A]/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Join hundreds of brands using AI-powered PR to secure more media
            coverage and build lasting relationships with journalists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F02D8E] to-[#E2006E] text-white rounded-full font-bold text-lg shadow-xl shadow-pink-500/30 transition-shadow"
            >
              Get Started Free
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#F02D8E]/20 text-[#F02D8E] rounded-full font-bold text-lg hover:border-[#F02D8E] transition-colors"
            >
              Book a Demo
              <FiArrowRight className="opacity-50 group-hover:translate-x-1 transition-all" />
            </motion.button>
          </div>

          {/* Trust Labels */}
          <div className="mt-10 flex items-center justify-center gap-4 text-xs font-bold text-[#19183A]/40 uppercase tracking-widest">
            <span>No credit card required</span>
            <span className="w-1 h-1 bg-pink-300 rounded-full" />
            <span>Free 14-day trial</span>
            <span className="w-1 h-1 bg-pink-300 rounded-full" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
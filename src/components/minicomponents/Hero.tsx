"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import HeroIllustration from "../shared/illustration";
import HeroBackground from "../shared/illustration";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-16 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{" "}
                <span className="inline-block">
                  <motion.span className="text-blue-600 inline-block">
                    {Array.from("NEXUS").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span className="text-pink-500 inline-block">
                    {Array.from("INFOTECH").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + 5 * 0.1 + index * 0.1, // Start after NEXUS animation
                          ease: "easeOut",
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                Empower your business with cutting-edge solutions that drive
                growth, efficiency, and success. Join thousands of companies
                that trust us to deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-pink-500/20 rounded-3xl blur-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* GIF container */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/gif.gif"
                  alt="Digital Solutions in Action"
                  className="w-full max-w-md h-auto rounded-xl"
                  loading="lazy"
                />

                {/* Floating elements around the GIF */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 -left-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-white text-xs font-bold">★</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

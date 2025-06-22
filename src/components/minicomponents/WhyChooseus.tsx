"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  // Keeping your existing features but reorganizing them into 3x2 grid
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      color: "#FF0083" // Pink
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results in milliseconds",
      color: "#1E40AF" // Blue
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support team to help you succeed",
      color: "#FF0083" // Pink
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Award-winning solutions trusted by top companies",
      color: "#1E40AF" // Blue
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Automate workflows and save up to 80% of your time",
      color: "#FF0083" // Pink
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business needs",
      color: "#1E40AF" // Blue
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Us</span><span className="text-pink-500">?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We combine innovation, reliability, and exceptional service to deliver 
            solutions that exceed expectations and drive real business results.
          </p>
        </motion.div>
        
        {/* Main content area - Adjusted ratio for better balance */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - 3x2 grid of features - increased proportion */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div 
                  className="w-20 h-20 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: feature.color === "#FF0083" ? "#FFF1F8" : "#EEF2FF" }}
                >
                  <feature.icon 
                    className="w-10 h-10" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 max-w-[180px]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Right side - Smaller Image */}
          <motion.div 
            className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Subtle background effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/20 to-pink-100/20"></div>
              
              <Image
                src="/why.png"
                width={350}
                height={500}
                alt="Why Choose Nexus"
                className="relative z-10 h-auto max-h-[500px] object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
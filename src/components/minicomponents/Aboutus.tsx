"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Globe, UserCheck, Target } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { icon: Briefcase, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "30+", label: "Countries Served" },
    { icon: UserCheck, value: "500+", label: "Satisfied Clients" },
    { icon: Target, value: "98%", label: "Success Rate" },
  ];

  // Define the primary colors
  const primaryBlue = "#1E40AF"; // A deep blue as the primary color (70%)
  const accentPink = "#FF0083"; // The pink accent (30%)

  return (
    <section id="about-us" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image and stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-700 rounded-lg opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-lg opacity-20 blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image 
                    src="/nexus.webp" 
                    alt="Our Team" 
                    width={600} 
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 rounded-xl flex items-center gap-4"
                >
                  <div className={`${index % 3 === 0 ? 'bg-pink-500' : 'bg-blue-700'} p-2 rounded-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block mb-6">
              <span className="text-blue-700 text-lg font-semibold">About Nexus</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through 
              <span className="text-blue-700"> Innovative Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2013, Nexus has been at the forefront of digital transformation, 
              helping businesses across various industries leverage technology to drive growth and efficiency.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts combines deep technical knowledge with business acumen to deliver 
              solutions that not only solve today's challenges but also prepare you for tomorrow's opportunities.
            </p>
            
            <div className="space-y-5 mb-10">
              {[
                "Client-focused approach with tailored solutions",
                "Cutting-edge technology with practical implementation",
                "Transparent communication and project management",
                "Continuous support and performance optimization"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-5 h-5 rounded-full ${index % 3 === 0 ? 'bg-pink-500' : 'bg-blue-700'} flex items-center justify-center`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
            
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
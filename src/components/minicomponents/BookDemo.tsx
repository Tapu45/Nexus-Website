"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BookDemo = () => {
  const router = useRouter();

  const handleBookDemo = () => {
    router.push('/demo');
  };

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Clients",
      color: "blue"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      color: "pink"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      color: "blue"
    }
  ];

  return (
    <section id="book-demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - Content (2/5 of the width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Ready to Transform Your{' '}
                <span className="text-blue-600">
                  Business?
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Experience the power of our innovative solutions. See how we can help you 
                streamline operations, boost productivity, and drive growth for your business.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-10 h-10 ${stat.color === 'blue' ? 'bg-blue-600' : 'bg-pink-500'} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                "✨ Cutting-edge technology solutions",
                "🚀 Rapid implementation and deployment",
                "🛡️ Enterprise-grade security and reliability",
                "📈 Proven track record of success"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-base">{feature.split(' ')[0]}</div>
                  <span className="text-gray-700 font-medium text-sm">{feature.substring(2)}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleBookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image (3/5 of the width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/demo.jpg"
                alt="Business Professional"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="text-2xl font-bold text-green-600">98.5%</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-sm text-gray-600">Projects Completed</div>
                <div className="text-2xl font-bold text-blue-600">2,500+</div>
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
"use client";

import { motion } from "framer-motion";
import { 
  BarChart2, PieChart, LineChart, TrendingUp, 
  Users, BarChart, Activity, DollarSign, 
  Target, ShoppingCart, Calendar, Globe
} from "lucide-react";
import React from "react";

const HeroBackground: React.FC = () => {
  // Business metrics for floating elements
  const businessMetrics = [
    { text: "+25% ROI", x: 15, y: 20, delay: 0 },
    { text: "99% Uptime", x: 75, y: 30, delay: 1.2 },
   
    { text: "+45% Growth", x: 80, y: 70, delay: 1.5 },
    { text: "5★ Rating", x: 10, y: 80, delay: 2.1 },
  ];

  // Business outcome icons
  const businessIcons = [
    //{ icon: <Globe size={32} />, x: 15, y: 25, delay: 0.3, service: "Global Reach" },
    { icon: <ShoppingCart size={32} />, x: 85, y: 35, delay: 0.8, service: "E-Commerce" },
    { icon: <Target size={30} />, x: 25, y: 70, delay: 1.2, service: "Goal Achievement" },
    { icon: <Users size={28} />, x: 75, y: 65, delay: 1.5, service: "User Engagement" },
    { icon: <Calendar size={34} />, x: 60, y: 20, delay: 0.6, service: "Scheduling" },
    { icon: <DollarSign size={30} />, x: 40, y: 80, delay: 1.8, service: "Revenue Growth" },
  ];

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 overflow-hidden z-0">
      
      {/* Dashboard mockup - moved to right side */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Dashboard header */}
        <div className="h-8 bg-blue-600 rounded-t-lg flex items-center px-3 justify-between">
          <div className="text-xs text-white font-medium">Business Dashboard</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Dashboard content - graphs and charts */}
        <div className="p-3 grid grid-cols-2 gap-2">
          {/* Line chart */}
          <div className="bg-gray-50 rounded-md p-2 h-16">
            <div className="text-xs text-gray-500 mb-1">Revenue</div>
            <div className="h-8 flex items-end gap-0.5">
              <div className="w-1/6 bg-blue-400 h-2 rounded-sm"></div>
              <div className="w-1/6 bg-blue-400 h-4 rounded-sm"></div>
              <div className="w-1/6 bg-blue-400 h-3 rounded-sm"></div>
              <div className="w-1/6 bg-blue-400 h-5 rounded-sm"></div>
              <div className="w-1/6 bg-blue-400 h-6 rounded-sm"></div>
              <div className="w-1/6 bg-blue-500 h-8 rounded-sm"></div>
            </div>
          </div>
          
          {/* Pie chart */}
          <div className="bg-gray-50 rounded-md p-2 h-16">
            <div className="text-xs text-gray-500 mb-1">Market Share</div>
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-r-pink-500 border-b-pink-500"></div>
            </div>
          </div>
          
          {/* Metrics summary */}
          <div className="bg-gray-50 rounded-md p-2 h-16 col-span-2">
            <div className="text-xs text-gray-500 mb-1">Key Metrics</div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+24%</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 text-blue-500 mr-1" />
                <span className="text-xs">2.4k</span>
              </div>
              <div className="flex items-center">
                <Activity className="w-3 h-3 text-pink-500 mr-1" />
                <span className="text-xs">98%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary business analytics visualization - positioned at bottom right */}
      <motion.div
        className="absolute bottom-24 right-24 w-48 h-20 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="text-xs font-medium text-gray-700 mb-2">Business Growth</div>
        <div className="flex items-end h-8 gap-1">
          {[20, 35, 25, 45, 30, 55, 40, 60, 50, 70].map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-blue-500 to-pink-400 rounded-sm"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ 
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Business metrics floating elements */}
      {businessMetrics.map((metric, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-semibold text-blue-600/70 bg-white/70 px-2 py-1 rounded backdrop-blur-sm"
          style={{ left: `${metric.x}%`, top: `${metric.y}%` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: metric.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {metric.text}
        </motion.div>
      ))}

      {/* Business outcome icons */}
      {businessIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative group">
            <div className="text-blue-600/60 hover:text-blue-600/90 transition-colors">
              {item.icon}
            </div>
            {/* Business outcome tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/80 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.service}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Digital connection lines representing business flow */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 150 200 Q 300 150 450 200 T 750 200"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 200 300 Q 400 250 600 300 T 900 300"
          stroke="#ec4899"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Subtle geometric elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-20 h-20 border border-blue-200/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-pink-100/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export default HeroBackground;
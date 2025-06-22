"use client";

import { motion } from "framer-motion";

const MarbleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base soft gradient background with blue primary and pink accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-pink-50/40" />
      
      {/* Blue-tinted particles (80% distribution) - Increased opacity */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 8% 12%, rgba(37, 99, 235, 0.2) 0.3px, transparent 0.6px),
            radial-gradient(circle at 23% 7%, rgba(59, 130, 246, 0.15) 0.2px, transparent 0.4px),
            radial-gradient(circle at 41% 19%, rgba(37, 99, 235, 0.25) 0.4px, transparent 0.8px),
            radial-gradient(circle at 57% 4%, rgba(59, 130, 246, 0.12) 0.15px, transparent 0.3px),
            radial-gradient(circle at 73% 16%, rgba(37, 99, 235, 0.18) 0.25px, transparent 0.5px),
            radial-gradient(circle at 89% 11%, rgba(59, 130, 246, 0.2) 0.3px, transparent 0.6px),
            radial-gradient(circle at 95% 28%, rgba(37, 99, 235, 0.14) 0.2px, transparent 0.4px),
            
            radial-gradient(circle at 14% 34%, rgba(59, 130, 246, 0.22) 0.35px, transparent 0.7px),
            radial-gradient(circle at 29% 41%, rgba(37, 99, 235, 0.16) 0.25px, transparent 0.5px),
            radial-gradient(circle at 46% 37%, rgba(59, 130, 246, 0.2) 0.3px, transparent 0.6px),
            radial-gradient(circle at 62% 43%, rgba(37, 99, 235, 0.18) 0.28px, transparent 0.56px),
            radial-gradient(circle at 78% 39%, rgba(59, 130, 246, 0.14) 0.22px, transparent 0.44px),
            radial-gradient(circle at 84% 46%, rgba(37, 99, 235, 0.24) 0.38px, transparent 0.76px),
            
            radial-gradient(circle at 6% 59%, rgba(37, 99, 235, 0.2) 0.32px, transparent 0.64px),
            radial-gradient(circle at 21% 67%, rgba(59, 130, 246, 0.16) 0.26px, transparent 0.52px),
            radial-gradient(circle at 37% 61%, rgba(37, 99, 235, 0.22) 0.34px, transparent 0.68px),
            radial-gradient(circle at 53% 68%, rgba(59, 130, 246, 0.18) 0.28px, transparent 0.56px),
            radial-gradient(circle at 69% 63%, rgba(37, 99, 235, 0.14) 0.24px, transparent 0.48px),
            radial-gradient(circle at 85% 71%, rgba(59, 130, 246, 0.2) 0.3px, transparent 0.6px),
            
            radial-gradient(circle at 12% 84%, rgba(59, 130, 246, 0.18) 0.28px, transparent 0.56px),
            radial-gradient(circle at 28% 91%, rgba(37, 99, 235, 0.16) 0.26px, transparent 0.52px),
            radial-gradient(circle at 44% 87%, rgba(59, 130, 246, 0.22) 0.34px, transparent 0.68px),
            radial-gradient(circle at 60% 93%, rgba(37, 99, 235, 0.14) 0.24px, transparent 0.48px),
            radial-gradient(circle at 76% 89%, rgba(59, 130, 246, 0.2) 0.3px, transparent 0.6px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Pink accent particles (20% distribution) - Increased visibility */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 15%, rgba(236, 72, 153, 0.15) 0.2px, transparent 0.4px),
            radial-gradient(circle at 75% 35%, rgba(219, 39, 119, 0.12) 0.18px, transparent 0.36px),
            radial-gradient(circle at 45% 65%, rgba(236, 72, 153, 0.18) 0.25px, transparent 0.5px),
            radial-gradient(circle at 85% 85%, rgba(219, 39, 119, 0.1) 0.15px, transparent 0.3px),
            radial-gradient(circle at 15% 75%, rgba(236, 72, 153, 0.14) 0.22px, transparent 0.44px)
          `,
          backgroundSize: '70px 70px'
        }}
      />
      
      {/* Micro blue particles for texture depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(37, 99, 235, 0.16) 0.12px, transparent 0.24px),
            radial-gradient(circle at 35% 15%, rgba(59, 130, 246, 0.12) 0.1px, transparent 0.2px),
            radial-gradient(circle at 55% 35%, rgba(37, 99, 235, 0.18) 0.14px, transparent 0.28px),
            radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.1) 0.08px, transparent 0.16px),
            radial-gradient(circle at 85% 45%, rgba(37, 99, 235, 0.16) 0.12px, transparent 0.24px),
            
            radial-gradient(circle at 25% 55%, rgba(59, 130, 246, 0.12) 0.1px, transparent 0.2px),
            radial-gradient(circle at 45% 65%, rgba(37, 99, 235, 0.18) 0.14px, transparent 0.28px),
            radial-gradient(circle at 65% 55%, rgba(59, 130, 246, 0.1) 0.08px, transparent 0.16px),
            radial-gradient(circle at 85% 75%, rgba(37, 99, 235, 0.16) 0.12px, transparent 0.24px),
            
            radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.12) 0.1px, transparent 0.2px),
            radial-gradient(circle at 35% 75%, rgba(37, 99, 235, 0.18) 0.14px, transparent 0.28px),
            radial-gradient(circle at 55% 85%, rgba(59, 130, 246, 0.1) 0.08px, transparent 0.16px)
          `,
          backgroundSize: '35px 35px'
        }}
      />
      
      {/* Larger marble-like patterns */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80px 40px at 20% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60px 30px at 60% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 100px 50px at 40% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 70px 35px at 80% 60%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 90px 45px at 70% 90%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)
          `,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Pink marble accents */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50px 25px at 30% 40%, rgba(236, 72, 153, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40px 20px at 70% 20%, rgba(219, 39, 119, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60px 30px at 50% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 35px 18px at 90% 50%, rgba(219, 39, 119, 0.03) 0%, transparent 50%)
          `,
          backgroundSize: '180px 180px'
        }}
      />
      
      {/* Floating animation particles with blue primary */}
      <motion.div
        animate={{
          x: [0, 6, 0],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-blue-400 opacity-20"
      />
      
      <motion.div
        animate={{
          x: [0, -4, 0],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/5 w-1 h-1 rounded-full bg-pink-400 opacity-15"
      />
      
      <motion.div
        animate={{
          x: [0, 8, 0],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-2/3 right-2/3 w-1 h-1 rounded-full bg-blue-300 opacity-25"
      />
    </div>
  );
};

export default MarbleBackground;
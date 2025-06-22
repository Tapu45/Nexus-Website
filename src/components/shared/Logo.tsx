"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0"
    >
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/logo.webp"
          alt="Nexus Infotech Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
          priority
        />
        <div className="flex flex-col">
          <span className={`text-xl font-black tracking-wider leading-tight transition-all duration-300 bg-gradient-to-r from-[#FF0083] to-[#562CFC] bg-clip-text text-transparent hover:from-[#562CFC] hover:to-[#FF0083] ${
            isScrolled ? '' : 'drop-shadow-sm'
          }`}
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            NEXUS
          </span>
          <span className={`text-xs font-light tracking-[0.2em] leading-tight transition-colors duration-300 ${
            isScrolled ? 'text-gray-500' : 'text-gray-600'
          }`}
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            INFOTECH
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default Logo;
"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/aboutus" },
      { name: "Careers", href: "/career" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ],
   
    resources: [
      { name: "Documentation", href: "/Documentation" },
      { name: "Help Center", href: "/Help" },
      // { name: "Community", href: "/community" },
      // { name: "Tutorials", href: "/Tutorials" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/nexusinfotech.berhampur/?igsh=MTVraTJkMTljOWFsaA%3D%3D#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-2xl font-bold mb-4 block">
                Nexus<span className="text-[#FF0083]">Infotech</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering businesses with innovative solutions that drive growth, 
                efficiency, and success. Join thousands of companies that trust us 
                to deliver exceptional results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#FF0083]" />
                  <span className="text-gray-400">www.nexusinfotech.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#FF0083]" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#FF0083]" />
                  <span className="text-gray-400">Nexus Infotech, Berhampur, Odisha, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FF0083] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © 2025 Nexus Infotech. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#FF0083] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
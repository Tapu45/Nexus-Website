"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  CheckCircle,
  Info,
  Settings,
  Monitor,
  MapPin,
  Calendar,
  Cookie,
  Smartphone
} from "lucide-react";
import { useState, useEffect } from "react";

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: Eye, color: "text-blue-600" },
    { id: "information-collection", title: "Information We Collect", icon: Database, color: "text-pink-600" },
    { id: "information-use", title: "How We Use Information", icon: Settings, color: "text-blue-600" },
    { id: "data-security", title: "Data Protection", icon: Lock, color: "text-pink-600" },
    { id: "contact", title: "Contact Us", icon: Mail, color: "text-blue-600" }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Name, email address, and phone number",
        "Contact details provided during registration",
        "Professional information and company details",
        "Communication preferences and settings"
      ]
    },
    {
      category: "Usage Data",
      icon: Monitor,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      items: [
        "Pages visited and time spent on our website",
        "Navigation paths and user interactions",
        "Service usage patterns and frequency",
        "Feature utilization and preferences"
      ]
    },
    {
      category: "Device Information",
      icon: Smartphone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "IP address and browser type",
        "Operating system and device identifiers",
        "Screen resolution and device capabilities",
        "Network and connection information"
      ]
    },
    {
      category: "Cookies & Tracking",
      icon: Cookie,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      items: [
        "Functional cookies for site operation",
        "Analytics cookies for usage patterns",
        "Performance tracking technologies",
        "User preference and session data"
      ]
    }
  ];

  // Auto-update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Privacy <span className="text-pink-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Your privacy is our priority. This document explains how Nexus Infotech collects, uses, and protects your information.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last Updated: June 21, 2025
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/4"
            >
              <div className="sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                        activeSection === section.id
                          ? section.color.includes('blue')
                            ? "bg-blue-600 text-white"
                            : "bg-pink-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-3" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-3/4"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-16">
                
                {/* Section 1: Introduction */}
                <div id="introduction">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">01. Introduction</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      Nexus Infotech values your privacy. This Privacy Policy explains how we collect, use, and protect your personal data 
                      when you use our services, including website applications, ERP systems, and digital marketing services.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Consent Notice</h4>
                          <p className="text-blue-800 text-sm">
                            By using our services, you consent to the practices described in this policy. 
                            If you do not agree with our privacy practices, please discontinue use of our services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Commitment</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>We collect only the information necessary to provide our services</li>
                      <li>We implement robust security measures to protect your data</li>
                      <li>We are transparent about our data collection and usage practices</li>
                      <li>We respect your rights and provide control over your personal information</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: Information We Collect */}
                <div id="information-collection">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">02. Information We Collect</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We may collect the following types of information when you use our services:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {dataTypes.map((type, index) => (
                      <div key={index} className={`${type.bgColor} rounded-lg p-6`}>
                        <div className="flex items-center mb-4">
                          <type.icon className={`w-6 h-6 ${type.color} mr-3`} />
                          <h3 className="text-lg font-semibold text-gray-900">{type.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {type.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-900 mb-2">Collection Methods</h4>
                    <p className="text-pink-800 text-sm">
                      Information is collected through direct interactions (forms, registrations), automatic collection 
                      (cookies, analytics), and third-party integrations when you use our services.
                    </p>
                  </div>
                </div>

                {/* Section 3: How We Use Information */}
                <div id="information-use">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">03. How We Use Information</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We use the collected information for the following purposes:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Settings className="w-5 h-5 text-blue-600 mr-2" />
                        Service Delivery
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and manage your account</li>
                        <li>Deliver customer support and technical assistance</li>
                        <li>Send service-related notifications and updates</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Eye className="w-5 h-5 text-pink-600 mr-2" />
                        Analytics & Improvement
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Monitor service performance and reliability</li>
                        <li>Develop new features and functionality</li>
                        <li>Conduct research and statistical analysis</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        Communication
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>Respond to inquiries and support requests</li>
                        <li>Send important security and policy updates</li>
                        <li>Provide marketing communications (with consent)</li>
                        <li>Share relevant product and service information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4: Data Protection */}
                <div id="data-security">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">04. Data Protection</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We implement comprehensive security measures to protect your personal information:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <Lock className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Technical Safeguards</h3>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure data storage with encryption at rest</li>
                        <li>• Regular security updates and patches</li>
                        <li>• Firewall and intrusion detection systems</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-pink-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Administrative Controls</h3>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Access controls and authentication</li>
                        <li>• Regular security training for staff</li>
                        <li>• Data handling policies and procedures</li>
                        <li>• Incident response and breach protocols</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Security Commitment</h4>
                    <p className="text-gray-700 text-sm">
                      While we strive to protect your information using industry-standard practices, no system is completely secure. 
                      We continuously monitor and improve our security measures to maintain the highest level of protection.
                    </p>
                  </div>
                </div>

                {/* Section 5: Contact Information */}
                <div id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                  
                  <p className="text-gray-600 mb-6">
                    For privacy-related questions or concerns, please contact us using the information below:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Mail className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">For privacy inquiries and support</p>
                      <a href="mailto:nexus.infotech@gmail.com" className="text-blue-600 font-medium hover:text-blue-700">
                        nexus.infotech@gmail.com
                      </a>
                    </div>

                    <div className="bg-pink-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-6 h-6 text-pink-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Postal Address</h3>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>Nexus Infotech</p>
                        <p>SunaSujan Apartment, Gandhinager 2nd line, 760002</p>
                        <p>Berhampur, Ganjam</p>
                        <p>Odisha, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond to privacy-related inquiries within 2-3 business days. 
                      For urgent matters, please mark your email as "Urgent" in the subject line.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
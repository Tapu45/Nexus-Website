"use client";

import { motion } from "framer-motion";
import { 
  Scale, 
  CheckCircle, 
  AlertTriangle, 
  Shield, 
  Users, 
  Settings, 
  Lock, 
  Mail, 
  Calendar,
  Info,
  Code,
  Building,
  Target,
  Globe,
  Server,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

  const tableOfContents = [
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle, color: "text-blue-600" },
    { id: "services", title: "Description of Services", icon: Settings, color: "text-pink-600" },
    { id: "accounts", title: "User Accounts", icon: Users, color: "text-blue-600" },
    { id: "acceptable-use", title: "Acceptable Use", icon: Shield, color: "text-pink-600" },
    { id: "intellectual-property", title: "Intellectual Property", icon: Lock, color: "text-blue-600" }
  ];

  const services = [
    {
      title: "Software Development",
      description: "Custom software development and application customization",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "ERP Systems",
      description: "Enterprise Resource Planning system implementation and support",
      icon: Building,
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      title: "Digital Marketing",
      description: "SEO, SEM, social media marketing, and digital campaigns",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Website Development",
      description: "Website design, development, and maintenance services",
      icon: Globe,
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      title: "IT Consulting",
      description: "Technology consulting and IT support services",
      icon: Settings,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const prohibitedActivities = [
    "Violating any applicable laws or regulations",
    "Transmitting any viruses, malware, or other harmful code",
    "Interfering with the operation of our Services",
    "Attempting to gain unauthorized access to our systems or data",
    "Engaging in any activity that could damage, disable, overburden, or impair our Services"
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
      const offset = 100; // Account for fixed navbar
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
            <Scale className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Terms & <span className="text-pink-600">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Please read these Terms carefully before using Nexus Infotech's services. 
              By using our services, you agree to be bound by these terms and conditions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last Updated: April 15, 2025
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
                
                {/* Section 1: Acceptance of Terms */}
                <div id="acceptance">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      By accessing or using the services provided by Nexus Infotech, including our website, 
                      software applications, ERP systems, and digital marketing services (collectively, the "Services"), 
                      you agree to be bound by these Terms of Service ("Terms").
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Important Notice</h4>
                          <p className="text-blue-800 text-sm">
                            If you do not agree to all of these Terms, do not use our Services. 
                            Your continued use of our Services constitutes acceptance of these Terms.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What This Means</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>These Terms form a legally binding agreement between you and Nexus Infotech</li>
                      <li>By using any of our services, you confirm that you have read and understood these Terms</li>
                      <li>If you're using our services on behalf of an organization, you confirm you have authority to bind that organization</li>
                      <li>These Terms apply to all users of our services, including visitors, registered users, and customers</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: Description of Services */}
                <div id="services">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Services</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Nexus Infotech provides a comprehensive range of technology services designed to help businesses 
                    grow and succeed in the digital age. Our services include but are not limited to:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {services.map((service, index) => (
                      <div key={index} className={`${service.bgColor} rounded-lg p-6`}>
                        <div className="flex items-center mb-4">
                          <service.icon className={`w-6 h-6 ${service.color} mr-3`} />
                          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="text-gray-700 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-900 mb-2">Service Availability</h4>
                    <p className="text-pink-800 text-sm">
                      We reserve the right to modify, suspend, or discontinue any part of our Services at any time. 
                      We will provide reasonable notice for significant changes that may affect your use of our Services.
                    </p>
                  </div>
                </div>

                {/* Section 3: User Accounts */}
                <div id="accounts">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
                  
                  <p className="text-gray-600 mb-6">
                    To access certain features of our Services, you may be required to create an account. 
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. 
                    You agree to notify us immediately of any unauthorized access to or use of your account.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Lock className="w-5 h-5 text-blue-600 mr-2" />
                        Account Security
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>Maintain the confidentiality of your account credentials</li>
                        <li>Use strong, unique passwords for your account</li>
                        <li>Enable two-factor authentication when available</li>
                        <li>Never share your login credentials with others</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-pink-600 mr-2" />
                        Account Responsibility
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>You are responsible for all activities that occur under your account</li>
                        <li>Notify us immediately of any unauthorized access or use</li>
                        <li>Provide accurate and up-to-date information</li>
                        <li>Comply with all applicable laws and our Terms of Service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4: Acceptable Use */}
                <div id="acceptable-use">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use</h2>
                  
                  <p className="text-gray-600 mb-6">
                    You agree to use our Services only for lawful purposes and in a manner that does not infringe the rights of, 
                    restrict, or inhibit anyone else's use and enjoyment of the Services. Prohibited behavior includes, but is not limited to:
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="space-y-2">
                      {prohibitedActivities.map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Enforcement</h3>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to investigate and take appropriate action against users who violate these terms, 
                    including but not limited to warning the user, suspending access, terminating accounts, or pursuing legal action when necessary.
                  </p>
                </div>

                {/* Section 5: Intellectual Property */}
                <div id="intellectual-property">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
                  
                  <p className="text-gray-600 mb-6">
                    All content, trademarks, logos, and other intellectual property displayed on or used in connection with 
                    our Services are the property of Nexus Infotech or its licensors. You are granted a limited, non-exclusive, 
                    and non-transferable license to access and use our Services for your internal business purposes, subject to these Terms.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-2" />
                        Our Rights
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-7">
                        <li>All software, code, and applications developed by Nexus Infotech</li>
                        <li>Our trademarks, service marks, and logos</li>
                        <li>Website content, documentation, and user interfaces</li>
                        <li>Proprietary methodologies and business processes</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-900 mb-2">Restrictions</h4>
                      <p className="text-pink-800 text-sm">
                        You may not copy, modify, distribute, sell, or lease any part of our Services without our prior written consent. 
                        Reverse engineering or attempting to extract source code is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions or concerns about these Terms of Service, please contact us at:
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-gray-900">Email:</span>
                    </div>
                    <a href="mailto:nexus.infotech@gmail.com" className="text-blue-600 hover:text-blue-700 ml-7">
                      nexus.infotech@gmail.com
                    </a>
                    
                    <div className="mt-4">
                      <p className="font-medium text-gray-900 mb-1">For legal notices, please send to:</p>
                      <div className="text-gray-600 ml-7">
                        <p>Nexus Infotech</p>
                        <p>Berhampur</p>
                      </div>
                    </div>
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

export default TermsAndConditionsPage;
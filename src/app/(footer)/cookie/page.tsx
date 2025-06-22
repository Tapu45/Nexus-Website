"use client";

import { motion } from "framer-motion";
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  CheckCircle, 
  Info,
  Monitor,
  Mail,
  Chrome,
  Calendar,
  Globe,
  Zap,
  Target,
  Lock,
  BarChart3,
  Palette,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const CookiePolicyPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: Eye, color: "text-blue-600" },
    { id: "what-are-cookies", title: "What Are Cookies?", icon: Cookie, color: "text-pink-600" },
    { id: "how-we-use", title: "How We Use Cookies", icon: Settings, color: "text-blue-600" },
    { id: "cookie-types", title: "Cookie Types", icon: Shield, color: "text-pink-600" },
    { id: "managing-cookies", title: "Managing Cookies", icon: Monitor, color: "text-blue-600" },
    { id: "contact", title: "Contact Us", icon: Mail, color: "text-pink-600" }
  ];

  const cookieUses = [
    {
      title: "Ensure our website works properly",
      description: "Basic functionality and security features",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Remember your preferences",
      description: "Language, theme, and user settings",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Improve our services through analytics",
      description: "Usage patterns and performance metrics",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Deliver relevant content (when consented)",
      description: "Personalized experiences and recommendations",
      icon: CheckCircle,
      color: "text-green-600"
    }
  ];

  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "Required for basic site functionality",
      status: "Always Active",
      icon: Lock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      statusColor: "bg-green-100 text-green-800",
      details: [
        "Session management and authentication",
        "Security and fraud prevention",
        "Basic website functionality",
        "Form submission and data processing"
      ]
    },
    {
      title: "Performance Cookies",
      description: "Help us improve our website",
      status: "Optional",
      icon: BarChart3,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: [
        "Page load times and performance metrics",
        "Error tracking and debugging",
        "Usage statistics and analytics",
        "A/B testing and optimization"
      ]
    },
    {
      title: "Functional Cookies",
      description: "Remember your preferences",
      status: "Optional",
      icon: Settings,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: [
        "Language and region preferences",
        "Theme and display settings",
        "Saved user preferences",
        "Previous form entries"
      ]
    },
    {
      title: "Marketing Cookies",
      description: "Used for personalized content",
      status: "Optional",
      icon: Target,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: [
        "Personalized content delivery",
        "Advertising effectiveness measurement",
        "Social media integration",
        "Third-party marketing tools"
      ]
    }
  ];

  const browserControls = [
    {
      browser: "Chrome",
      icon: Chrome,
      steps: "Settings → Privacy and security → Cookies",
      color: "text-blue-600"
    },
    {
      browser: "Firefox",
      icon: Globe,
      steps: "Options → Privacy & Security → Cookies",
      color: "text-pink-600"
    },
    {
      browser: "Safari",
      icon: Monitor,
      steps: "Preferences → Privacy → Manage Website Data",
      color: "text-blue-600"
    },
    {
      browser: "Edge",
      icon: Shield,
      steps: "Settings → Cookies and site permissions",
      color: "text-pink-600"
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
            <Cookie className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Cookie <span className="text-pink-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              How Nexus Infotech uses cookies to enhance your browsing experience while respecting your privacy.
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-6">
                      At Nexus Infotech, we use cookies to enhance your experience while maintaining strict privacy standards. 
                      This policy explains how we use these technologies and how you can control them.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Cookie Commitment</h4>
                          <p className="text-blue-800 text-sm">
                            We are committed to using cookies responsibly and transparently. We only use cookies that are 
                            necessary for website functionality or that you have explicitly consented to.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Why This Matters</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Cookies help us provide a better user experience</li>
                      <li>We respect your privacy and give you control over cookie settings</li>
                      <li>Understanding our cookie use helps you make informed decisions</li>
                      <li>We comply with all applicable privacy laws and regulations</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: What Are Cookies */}
                <div id="what-are-cookies">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. What Are Cookies?</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files stored on your device that help websites remember information about your visit. 
                    They make your next visit easier and the site more useful to you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <Cookie className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">How Cookies Work</h3>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Stored locally on your device</li>
                        <li>• Contain small amounts of data</li>
                        <li>• Sent back to the website on future visits</li>
                        <li>• Help remember your preferences</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-pink-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Cookie Safety</h3>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Cannot access personal files</li>
                        <li>• Cannot install software</li>
                        <li>• Cannot carry viruses</li>
                        <li>• Can be controlled by you</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Simple Explanation</h4>
                    <p className="text-gray-700 text-sm">
                      Think of cookies like a memory note that a website leaves on your computer. When you visit the website again, 
                      it can read this note to remember things like your language preference or items in your shopping cart.
                    </p>
                  </div>
                </div>

                {/* Section 3: How We Use Cookies */}
                <div id="how-we-use">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Cookies</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We use cookies responsibly to improve your experience on our website. Here's how:
                  </p>

                  <div className="space-y-4 mb-6">
                    {cookieUses.map((use, index) => (
                      <div key={index} className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <use.icon className={`w-5 h-5 ${use.color} mr-3 mt-0.5 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{use.title}</h4>
                          <p className="text-gray-600 text-sm">{use.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-900 mb-2">Consent-Based Usage</h4>
                    <p className="text-pink-800 text-sm">
                      We only use non-essential cookies with your explicit consent. You can withdraw consent at any time 
                      through your browser settings or our cookie preference center.
                    </p>
                  </div>
                </div>

                {/* Section 4: Cookie Types */}
                <div id="cookie-types">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookie Types</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We use different types of cookies for various purposes. Here's what each type does:
                  </p>

                  <div className="space-y-6">
                    {cookieTypes.map((type, index) => (
                      <div key={index} className={`${type.bgColor} rounded-lg p-6 border border-gray-200`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <type.icon className={`w-6 h-6 ${type.color} mr-3`} />
                            <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${type.statusColor}`}>
                            {type.status}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{type.description}</p>
                        <ul className="space-y-1">
                          {type.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Managing Cookies */}
                <div id="managing-cookies">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Managing Cookies</h2>
                  
                  <p className="text-gray-600 mb-6">
                    You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {browserControls.map((browser, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <browser.icon className={`w-6 h-6 ${browser.color} mr-3`} />
                          <h3 className="text-lg font-semibold text-gray-900">{browser.browser}</h3>
                        </div>
                        <p className="text-gray-600 text-sm font-mono bg-white p-2 rounded border">
                          {browser.steps}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Important Note</h4>
                        <p className="text-yellow-800 text-sm">
                          Disabling cookies may affect website functionality. Some features may not work properly 
                          if essential cookies are blocked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6: Contact */}
                <div id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact Us</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Have questions about our cookie policy? We're here to help.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      For questions about cookies, privacy, or data protection
                    </p>
                    <a href="mailto:privacy@nexusinfotech.com" className="text-blue-600 font-medium hover:text-blue-700">
                      privacy@nexusinfotech.com
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Cookie Preference Center</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Manage your cookie preferences and consent settings directly on our website.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Manage Cookie Preferences
                    </button>
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

export default CookiePolicyPage;
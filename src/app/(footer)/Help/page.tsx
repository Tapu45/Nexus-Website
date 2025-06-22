"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Users,
  Settings,
  Shield,
  CreditCard,
  Code,
  CheckCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  HelpCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Download,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HelpCentrePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Topics", icon: HelpCircle, color: "text-gray-600" },
    {
      id: "getting-started",
      name: "Getting Started",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      id: "account",
      name: "Account & Billing",
      icon: CreditCard,
      color: "text-pink-600",
    },
    {
      id: "technical",
      name: "Technical Support",
      icon: Settings,
      color: "text-blue-600",
    },
    { id: "security", name: "Security", icon: Shield, color: "text-pink-600" },
    {
      id: "api",
      name: "API & Integration",
      icon: Code,
      color: "text-blue-600",
    },
    {
      id: "collaboration",
      name: "Team & Collaboration",
      icon: Users,
      color: "text-pink-600",
    },
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      available: "24/7 Available",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      available: "Mon-Fri 9AM-6PM",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions",
      icon: Mail,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      available: "Response within 24h",
      action: "Send Email",
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: Users,
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      available: "Community Driven",
      action: "Join Forum",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Nexus Infotech?",
      answer:
        "Getting started is easy! First, create your account and verify your email. Then, follow our Quick Start Guide in the documentation to set up your first project. Our onboarding wizard will walk you through the essential steps.",
      category: "getting-started",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment gateway.",
      category: "account",
    },
    {
      question: "How can I integrate the API into my application?",
      answer:
        "Our REST API is designed to be developer-friendly. Start by obtaining your API key from the dashboard, then refer to our comprehensive API documentation. We provide SDKs for popular programming languages including JavaScript, Python, PHP, and Java.",
      category: "api",
    },
    {
      question: "Is my data secure with Nexus Infotech?",
      answer:
        "Absolutely. We use enterprise-grade security measures including 256-bit SSL encryption, regular security audits, and compliance with SOC 2 Type II standards. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee.",
      category: "security",
    },
    {
      question: "Can I collaborate with my team members?",
      answer:
        "Yes! Our platform supports team collaboration with role-based access controls. You can invite team members, assign different permission levels, and track activities. Premium plans include advanced collaboration features like real-time editing and commenting.",
      category: "collaboration",
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer:
        "You can change your plan anytime from your account dashboard. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. We'll prorate charges and provide credits as applicable.",
      category: "account",
    },
    {
      question: "What's included in technical support?",
      answer:
        "Technical support includes help with integration, troubleshooting, best practices guidance, and platform-related questions. Premium customers get priority support with faster response times and dedicated account managers.",
      category: "technical",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click the 'Forgot Password' link on the login page and enter your email address. You'll receive a secure reset link within a few minutes. If you don't receive the email, check your spam folder or contact support.",
      category: "account",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help <span className="text-pink-600">Centre</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to your questions, get support, and learn how to make
              the most of Nexus Infotech services.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-600 bg-gray-800 text-white rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-lg placeholder-gray-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Find quick answers to the most common questions about our platform
              and services.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? category.id === "getting-started" ||
                        category.id === "technical" ||
                        category.id === "api"
                        ? "bg-blue-600 text-white"
                        : category.id === "account" ||
                          category.id === "security" ||
                          category.id === "collaboration"
                        ? "bg-pink-600 text-white"
                        : "bg-gray-800 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HelpCentrePage;

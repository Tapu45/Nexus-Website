"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Monitor, 
  Smartphone, 
  BarChart3, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Target, 
  Zap,
  Shield,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Loading component
const ServicesLoading = () => (
  <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading services...</p>
    </div>
  </div>
);

// Main services component that uses useSearchParams
const ServicesContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeService, setActiveService] = useState<string | null>(null);

  // Check for service parameter on mount
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setActiveService(serviceParam);
    }
  }, [searchParams]);

  const services = [
    {
      id: "web-applications",
      title: "Web Applications",
      shortDescription: "Modern, responsive web applications built with cutting-edge technologies",
      description: "Our web application development services focus on creating scalable, high-performance web solutions that deliver exceptional user experiences. We leverage the latest technologies and frameworks to build applications that are not only visually appealing but also robust, secure, and maintainable.",
      icon: Monitor,
      color: "blue",
      mediaUrl: "/web.mp4",
      benefits: [
        "Cross-platform compatibility across all devices",
        "Real-time data synchronization and updates",
        "Advanced security measures and data protection",
        "SEO-optimized for better search engine visibility",
        "Scalable architecture for future growth",
        "Progressive Web App (PWA) capabilities"
      ],
      approach: [
        "Requirements Analysis & Planning",
        "UI/UX Design & Prototyping", 
        "Agile Development Process",
        "Quality Assurance & Testing",
        "Deployment & Launch",
        "Ongoing Support & Maintenance"
      ],
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Real-time Features", 
        "SEO Optimization",
        "API Integration",
        "Cloud Deployment"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      shortDescription: "Native and cross-platform mobile apps for iOS and Android",
      description: "We specialize in developing mobile applications that provide seamless user experiences across iOS and Android platforms. Our mobile solutions are designed to leverage device capabilities, ensure optimal performance, and deliver engaging user interfaces that drive user adoption and retention.",
      icon: Smartphone,
      color: "pink",
      mediaUrl: "/app.mp4",
      benefits: [
        "Native performance and smooth user experience",
        "Offline functionality for uninterrupted usage",
        "Push notifications for better user engagement",
        "Device integration (camera, GPS, sensors)",
        "App store optimization and deployment",
        "Cross-platform compatibility"
      ],
      approach: [
        "Market Research & Strategy",
        "User Experience Design",
        "Cross-platform Development",
        "Performance Optimization",
        "App Store Submission",
        "Post-launch Analytics & Updates"
      ],
      features: [
        "iOS & Android",
        "Cross-Platform",
        "Push Notifications",
        "Offline Functionality",
        "Biometric Authentication",
        "In-app Purchases"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"]
    },
    {
      id: "dashboard-ecommerce",
      title: "Dashboard & E-commerce",
      shortDescription: "Powerful analytics dashboards and feature-rich e-commerce platforms",
      description: "Our dashboard and e-commerce solutions provide comprehensive business intelligence and online selling capabilities. We create intuitive dashboards that transform complex data into actionable insights, and robust e-commerce platforms that drive sales and enhance customer experiences.",
      icon: BarChart3,
      color: "blue",
      mediaUrl: "/e.mp4",
      benefits: [
        "Real-time analytics and business insights",
        "Secure payment processing and transactions",
        "Inventory management and order tracking",
        "Customer relationship management",
        "Multi-channel sales integration",
        "Advanced reporting and forecasting"
      ],
      approach: [
        "Business Requirements Gathering",
        "Data Architecture Design",
        "Dashboard Development",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "Analytics Implementation"
      ],
      features: [
        "Analytics Dashboard",
        "E-commerce Platform",
        "Payment Integration",
        "Inventory Management",
        "Customer Portal",
        "Reporting Tools"
      ],
      technologies: ["React", "D3.js", "Shopify", "WooCommerce", "Stripe", "PayPal"]
    },
    {
      id: "sfa-dms",
      title: "SFA & DMS",
      shortDescription: "Sales Force Automation and Document Management Systems",
      description: "Our SFA and DMS solutions streamline business processes by automating sales workflows and providing comprehensive document management capabilities. These systems enhance productivity, improve collaboration, and ensure compliance while reducing operational overhead.",
      icon: Code,
      color: "pink",
      mediaUrl: "/sfa.mp4",
      benefits: [
        "Automated sales process workflows",
        "Centralized document repository",
        "Enhanced team collaboration",
        "Improved compliance and security",
        "Reduced operational costs",
        "Streamlined approval processes"
      ],
      approach: [
        "Process Analysis & Mapping",
        "System Architecture Design",
        "Workflow Automation Setup",
        "Document Management Integration",
        "User Training & Onboarding",
        "Continuous Process Optimization"
      ],
      features: [
        "Sales Automation",
        "Document Management",
        "Workflow Optimization",
        "CRM Integration",
        "Approval Workflows",
        "Audit Trails"
      ],
      technologies: ["Salesforce", "SharePoint", "Microsoft Dynamics", "Custom APIs", "Azure", "Office 365"]
    }
  ];

  const handleServiceFilter = (serviceId: string) => {
    setActiveService(serviceId);
    router.push(`/services?service=${serviceId}`, { scroll: false });
  };

  const handleShowAll = () => {
    setActiveService(null);
    router.push('/services', { scroll: false });
  };

  const filteredServices = activeService 
    ? services.filter(service => service.id === activeService)
    : services;

  const ServiceCard = ({ service, isFiltered = false }: { service: typeof services[0], isFiltered?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-3xl shadow-xl overflow-hidden ${isFiltered ? 'mb-12' : 'mb-8'}`}
    >
      {/* Header Section */}
      <div className={`${service.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-pink-600 to-pink-700'} text-white p-8`}>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <service.icon size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="text-white/80 text-lg">{service.shortDescription}</p>
          </div>
        </div>
        
        {/* Video/Media Section */}
        {service.mediaUrl && (
          <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
            <video
              src={service.mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-8">
        {/* Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Target className={`w-6 h-6 mr-3 ${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
            What We Offer
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className={`w-6 h-6 mr-3 ${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle2 className={`w-5 h-5 mt-0.5 ${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} flex-shrink-0`} />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className={`w-6 h-6 mr-3 ${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
            Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {service.approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-xl border-2 ${service.color === 'blue' ? 'border-blue-200 bg-blue-50' : 'border-pink-200 bg-pink-50'}`}
              >
                <div className={`w-8 h-8 rounded-full ${service.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} text-white flex items-center justify-center font-bold text-sm mb-3`}>
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className={`w-6 h-6 mr-3 ${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
            Technologies We Use
          </h3>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  service.color === 'blue' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-pink-100 text-pink-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => router.push('/contact')}
              className={`${service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white px-8 py-3 rounded-full font-medium group shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              Get Started
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/contact')}
              className={`border-2 border-gray-300 text-gray-700 hover:border-${service.color}-600 hover:text-${service.color}-600 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg`}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-pink-600">Services</span> & <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to transform your business and drive growth
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={handleShowAll}
              variant={!activeService ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                !activeService 
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Services
            </Button>
            {services.map((service) => (
              <Button
                key={service.id}
                onClick={() => handleServiceFilter(service.id)}
                variant={activeService === service.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? `${service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white`
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Services Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isFiltered={!!activeService}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Main page component with Suspense wrapper
const ServicesPage = () => {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesContent />
    </Suspense>
  );
};

export default ServicesPage;
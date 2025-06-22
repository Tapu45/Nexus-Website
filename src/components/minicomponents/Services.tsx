"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Monitor, Smartphone, BarChart3, Users, Code, ArrowRight, CheckCircle2, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Define services that should have trimmed videos
  const trimmedServices = [1] // Add service IDs that need trimming (e.g., Web Applications = 1)

  const services = [
    {
      id: "web-applications", // Changed from 1 to match the services page
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with cutting-edge technologies to deliver exceptional user experiences and robust functionality.",
      icon: Monitor,
      features: ["Responsive Design", "Progressive Web Apps", "Real-time Features", "SEO Optimization"],
      href: "/services/web-app",
      mediaUrl: "/web.mp4",
      mediaType: "video",
      color: "blue",
      trimVideo: false
    },
    {
      id: "mobile-applications", // Changed from 2 to match the services page
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      icon: Smartphone,
      features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Functionality"],
      href: "/services/mobile-app",
      mediaUrl: "/app.mp4",
      mediaType: "video",
      color: "pink",
      trimVideo: true
    },
    {
      id: "dashboard-ecommerce", // Changed from 3 to match the services page
      title: "Dashboard & E-commerce",
      description:
        "Powerful analytics dashboards and feature-rich e-commerce platforms that provide insights and drive sales.",
      icon: BarChart3,
      features: ["Analytics Dashboard", "E-commerce Platform", "Payment Integration", "Inventory Management"],
      href: "/services/dashboard-ecommerce",
      mediaUrl: "e.mp4",
      mediaType: "video",
      color: "blue",
      trimVideo: true
    },
    {
      id: "sfa-dms", // Changed from 4 to match the services page
      title: "SFA & DMS",
      description:
        "Sales Force Automation and Document Management Systems to streamline your business processes and boost productivity.",
      icon: Code,
      features: ["Sales Automation", "Document Management", "Workflow Optimization", "CRM Integration"],
      href: "/services/sfa-dms",
      mediaUrl: "sfa.mp4",
      mediaType: "video",
      color: "pink",
      trimVideo: false
    },
    // {
    //   id: 5,
    //   title: "Consulting",
    //   description:
    //     "Strategic technology consulting to help you make informed decisions and optimize your business processes for maximum efficiency.",
    //   icon: Users,
    //   features: ["Strategic Planning", "Technology Assessment", "Business Analysis", "Digital Transformation"],
    //   href: "/services/consulting",
    //   mediaUrl: "", // Local image from public folder
    //   mediaType: "image",
    //   color: "blue",
    //   trimVideo: false // Not applicable for images
    // },
  ]

  // Check if component is mounted to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Reset video when service changes
    setIsPlaying(true)
    
    if (videoRef.current) {
      // Only set currentTime for videos that need trimming
      if (services[activeService].trimVideo) {
        videoRef.current.currentTime = 5;
      } else {
        videoRef.current.currentTime = 0;
      }
      
      videoRef.current.play().catch(console.error)
    }
  }, [activeService])

  // Set up video duration and end time listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };
    
    const handleTimeUpdate = () => {
      // Only apply trimming logic to videos that should be trimmed
      if (services[activeService]?.trimVideo && video.duration > 10) {
        if (video.currentTime >= video.duration - 5) {
          video.currentTime = 5;
        }
      }
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [activeService, services]); // Added activeService as dependency to update when service changes

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const renderMedia = (service: (typeof services)[0]) => {
    if (!service.mediaUrl) {
      // Show fallback placeholder when no URL is provided
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-2xl">
          <div className="text-center">
            {React.createElement(service.icon, {
              size: 48,
              className: "text-gray-400 mx-auto mb-3",
            })}
            <p className="text-gray-500 font-medium text-sm">{service.title}</p>
            <p className="text-gray-400 text-xs mt-1">Preview Coming Soon</p>
          </div>
        </div>
      )
    }

 
if (service.mediaType === "video") {
  return (
    <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={service.mediaUrl}
        className="w-full h-full object-cover rounded-2xl"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error("Video error:", e)
          e.currentTarget.style.display = "none"
          const fallback = e.currentTarget.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = "flex"
        }}
      />

      {/* Video Error Fallback */}
      <div className="hidden w-full h-full bg-gray-100 flex items-center justify-center rounded-2xl">
        <div className="text-center">
          {React.createElement(service.icon, {
            size: 48,
            className: `${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} mx-auto mb-3`,
          })}
          <p className={`${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} font-medium text-sm`}>Video Preview</p>
          <p className="text-gray-400 text-xs mt-1">Unable to load</p>
        </div>
      </div>

      {/* Play/Pause button overlay */}
      <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-pointer" onClick={handleVideoClick}>
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 shadow-lg">
            {isPlaying ? (
              <Pause size={24} className={service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} />
            ) : (
              <Play size={24} className={`${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} ml-1`} />
            )}
          </div>
        </div>
      </div>

      {/* Video info overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-white font-medium text-sm">{service.title} Demo</h4>
        <p className="text-white/80 text-xs">Click to control playback</p>
      </div>
    </div>
  )
}

    // Handle images
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden group">
        <img
          src={service.mediaUrl || "/placeholder.svg"}
          alt={`${service.title} preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            console.error("Image error:", e)
            e.currentTarget.style.display = "none"
            const fallback = e.currentTarget.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = "flex"
          }}
        />

        {/* Image Error Fallback */}
        <div className="hidden w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            {React.createElement(service.icon, {
              size: 48,
              className: `${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} mx-auto mb-3`,
            })}
            <p className={`${service.color === 'blue' ? 'text-blue-600' : 'text-pink-600'} font-medium text-sm`}>{service.title}</p>
            <p className="text-gray-400 text-xs mt-1">Preview Image</p>
          </div>
        </div>

        {/* Hover overlay for images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">{service.title}</p>
            <p className="text-xs opacity-80">Click to learn more</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-pink-600">Services</span>
            {' '}&{' '}
            <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From web applications to mobile apps and business automation systems, we provide comprehensive solutions to
            accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeService === index
                  ? `${service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white shadow-lg transform scale-105`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Active Service Display */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${services[activeService].color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-2xl flex items-center justify-center shadow-lg`}>
                {React.createElement(services[activeService].icon, {
                  size: 28,
                  className: "text-white",
                })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                <div className={`w-20 h-1 ${services[activeService].color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-full mt-2`}></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">{services[activeService].description}</p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services[activeService].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 size={18} className={services[activeService].color === 'blue' ? 'text-blue-600' : 'text-pink-600'} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                onClick={() => (window.location.href = `/services?service=${services[activeService].id}`)}
                className={`${services[activeService].color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white px-8 py-3 rounded-full font-medium group shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Learn More
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
             
               
            </div>
          </div>

          {/* Right Side - Media */}
          <div className="relative">
            <div className={`${services[activeService].color === 'blue' ? 'bg-blue-50' : 'bg-pink-50'} rounded-3xl p-6 relative overflow-hidden shadow-lg`}>
              {/* Decorative elements */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${services[activeService].color === 'blue' ? 'bg-blue-200' : 'bg-pink-200'} rounded-full opacity-20 -mr-12 -mt-12`}></div>
              <div className={`absolute bottom-0 left-0 w-20 h-20 ${services[activeService].color === 'blue' ? 'bg-blue-200' : 'bg-pink-200'} rounded-full opacity-20 -ml-10 -mb-10`}></div>

              {/* Media Container - Rectangle 16:10 aspect ratio */}
              <div className="relative z-10 w-full aspect-[16/10] max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  style={{ minHeight: "200px" }}
                >
                  {/* Render Image/Video */}
                  {renderMedia(services[activeService])}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

     
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Need Custom Solutions?</h3>
            <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
              Have a unique project in mind? We specialize in creating tailored solutions that perfectly fit your business requirements.
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Custom Service
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
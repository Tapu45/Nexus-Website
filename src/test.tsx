"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      company: "TechCorp Inc.",
      rating: 5,
      text: "This solution transformed our business operations completely. The ROI was evident within the first month of implementation.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      position: "CTO, StartupXYZ",
      company: "StartupXYZ",
      rating: 5,
      text: "Outstanding support and incredibly intuitive platform. Our team was up and running in no time.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Solutions",
      rating: 5,
      text: "The analytics and insights provided have been game-changing for our decision-making process.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "David Kim",
      position: "Founder",
      company: "InnovateLab",
      rating: 5,
      text: "Exceptional quality and reliability. This platform has become an integral part of our daily operations.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "BrandForward",
      rating: 5,
      text: "The customer service is unmatched. Every interaction has been professional and helpful.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "James Wilson",
      position: "Product Manager",
      company: "NextGen Solutions",
      rating: 5,
      text: "Highly recommend this platform. It's scalable, secure, and has everything we need to grow.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const slideInterval = 5000; // 5 seconds per slide
  const visibleTestimonials = 3; // Number of testimonials visible at once

  // Function to handle auto-sliding
  const startAutoPlay = () => {
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    
    autoPlayInterval.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
        );
      }
    }, slideInterval);
  };

  // Start autoplay on component mount
  useEffect(() => {
    startAutoPlay();
    
    // Cleanup interval on component unmount
    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    };
  }, [isPaused]);

  // Functions to handle manual navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume autoplay after 10 seconds
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume autoplay after 10 seconds
  };

  // Display at most visibleTestimonials at a time
  const displayTestimonials = testimonials.slice(
    currentIndex, 
    Math.min(currentIndex + visibleTestimonials, testimonials.length)
  );

  // If we're at the end and don't have enough testimonials to fill the view
  if (displayTestimonials.length < visibleTestimonials) {
    const extraNeeded = visibleTestimonials - displayTestimonials.length;
    displayTestimonials.push(...testimonials.slice(0, extraNeeded));
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-pink-500">Customers</span> <span className="text-purple-600">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with our solutions.
          </p>
        </motion.div>

        {/* Testimonial carousel container */}
        <div className="relative">
          {/* Navigation controls */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button 
              onClick={goToPrevSlide} 
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button 
              onClick={goToNextSlide} 
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(0)` }}
            >
              <AnimatePresence mode="wait">
                <div className="flex gap-8">
                  {displayTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                    >
                      <div 
                        className="bg-white rounded-2xl p-8 shadow-lg h-full border border-gray-100 relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        <div className="absolute top-6 right-6 text-pink-500 opacity-20">
                          <Quote size={32} />
                        </div>

                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>

                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.position}
                            </div>
                            <div className="text-sm text-pink-500 font-medium">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - visibleTestimonials + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
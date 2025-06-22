'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { API_ROUTES } from '@/lib/api'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  isActive: boolean
  order: number
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonails = async () => {
      try {
        const response = await fetch(API_ROUTES.TESTIMONIALS.GET_ALL)
        if (response.ok) {
          const data = await response.json()
          const activeTestimonials = data.filter((t: Testimonial) => t.isActive)
          setTestimonials(activeTestimonials)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonails()
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || testimonials.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying, testimonials.length, isPaused])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Render stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded-md w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-md w-96 mx-auto animate-pulse" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-pink-500">Customers</span> <span className="text-purple-600">Say</span>
          </h2>
          <p className="text-lg text-gray-600">No testimonials available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
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
              onClick={goToPrevious} 
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button 
              onClick={goToNext} 
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleAutoPlay}
              className="h-10 w-10 rounded-full bg-white shadow-lg border border-gray-200"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Main Testimonial Display */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                  <div className="absolute top-6 right-6 text-pink-500 opacity-20">
                    <Quote size={32} />
                  </div>

                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-sm text-pink-500 font-medium">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          {isPlaying && !isPaused && (
            <div className="mt-6 w-full max-w-4xl mx-auto bg-gray-200 rounded-full h-1">
              <motion.div
                className="bg-blue-600 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          )}

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
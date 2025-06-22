"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Loader2, AlertCircle, Mail, Phone, Building2, User, MessageCircle, Star, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { API_ROUTES } from '@/lib/api'

interface DemoFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const BookDemoPage = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.company) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Scheduling your demo...'
    })

    try {
      const response = await fetch(API_ROUTES.DEMO_REQUESTS.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Demo scheduled successfully! Our team will contact you within 24 hours to confirm your appointment.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Failed to schedule demo')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error scheduling your demo. Please try again or contact us directly.'
      })
    }
  }

  const benefits = [
    {
      icon: Calendar,
      title: "Free 30-Minute Demo",
      description: "Personalized walkthrough of our platform tailored to your business needs",
      color: "blue"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Speak with our solution specialists and get answers to all your questions",
      color: "pink"
    },
    {
      icon: CheckCircle,
      title: "Custom Recommendations",
      description: "Receive tailored solutions and implementation strategies for your company",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you - we accommodate all time zones",
      color: "pink"
    },
    {
      icon: Shield,
      title: "No Pressure Approach",
      description: "Explore our platform without any sales pressure or long-term commitments",
      color: "blue"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "See real case studies and success stories from companies like yours",
      color: "pink"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Book Your{' '}
              <span className="text-blue-600">
                Free Demo
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our innovative solutions can transform your business. 
              Schedule a personalized demo with our experts and discover the power of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - What You'll Get */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What You'll{' '}
                  <span className="text-pink-600">
                    Get
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Our personalized demo sessions are designed to show you exactly how our solutions can benefit your business.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
                  >
                    <div className={`w-12 h-12 ${benefit.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Demo Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="shadow-xl border border-gray-100 bg-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Schedule Your{' '}
                      <span className="text-blue-600">Demo</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="flex-1 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-1" />
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-300 transition-all duration-200 text-base"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-1" />
                            Business Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@company.com"
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-300 transition-all duration-200 text-base"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Building2 className="w-4 h-4 inline mr-1" />
                            Company Name *
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-200 text-base"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-1" />
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-200 text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          Tell us about your needs
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="What specific challenges are you looking to solve? What features are you most interested in seeing?"
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-300 transition-all duration-200 resize-none text-base"
                        />
                      </div>
                    </div>

                    {/* Status Message */}
                    {status.type !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg flex items-center space-x-3 ${
                          status.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : status.type === 'error'
                            ? 'bg-red-50 text-red-800 border border-red-200'
                            : 'bg-pink-50 text-pink-800 border border-pink-200'
                        }`}
                      >
                        {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                        {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                        {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                        <span>{status.message}</span>
                      </motion.div>
                    )}

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        disabled={status.type === 'loading'}
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status.type === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Scheduling Demo...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 mr-2" />
                            Schedule My Demo
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        By scheduling a demo, you agree to our{" "}
                        <a href="/terms" className="text-pink-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-pink-600 hover:underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookDemoPage
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { API_ROUTES } from '@/lib/api'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
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
    if (!formData.name || !formData.email || !formData.message) {
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
      message: 'Sending your message...'
    })

    try {
      const response = await fetch(API_ROUTES.CONTACTS.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@nexusinfotech.com',
      description: 'Send us an email anytime!',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'group-hover:bg-blue-100',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9876543210',
      description: 'Mon-Fri from 9am to 6pm',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'group-hover:bg-pink-100',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Nexus Infotech, Berhampur',
      description: 'Odisha, India',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'group-hover:bg-blue-100',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Friday',
      description: '9:00 AM to 6:00 PM IST',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'group-hover:bg-pink-100',
    },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-pink-50/20 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-5 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-pink-200">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${info.bgColor} ${info.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300`}>
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-base text-gray-900 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-500">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full"
            >
              <Card className="shadow-xl border border-gray-100 bg-white h-full hover:border-pink-200 transition-colors duration-300">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Send us a{' '}
                      <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Message</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-300 transition-all duration-200 text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-200 text-base"
                      />
                    </div>

                    <div className="flex-grow flex flex-col">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-300 transition-all duration-200 resize-none text-base flex-grow min-h-[120px]"
                        required
                      />
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

                    <Button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                    >
                      {status.type === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Google Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              {/* Our Location */}
              <Card className="shadow-lg border border-gray-100 bg-white overflow-hidden h-full hover:border-blue-200 transition-colors duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Location Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 via-pink-50 to-blue-100">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Navigation className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                    </div>
                    <p className="text-gray-700 font-medium">Nexus Infotech, Berhampur, Odisha, India</p>
                  </div>
                  
                  {/* Google Map Embed */}
                  <div className="relative flex-grow">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30127.123456789!2d84.783!3d19.314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d4f1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sBerhampur%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nexus Infotech Location"
                    />
                  </div>
                  
                  {/* Location Details */}
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-pink-50">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-pink-600" />
                        <span className="text-gray-700 font-medium">Berhampur, Odisha, India</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 font-medium">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-pink-600" />
                        <span className="text-gray-700 font-medium">hello@nexusinfotech.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 font-medium">+91 9876543210</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('https://maps.google.com/?q=Nexus+Infotech+Berhampur+Odisha', '_blank')}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText, CheckCircle, AlertCircle, Loader2, Code, Database, BarChart, Palette, X, User, Mail, MapPin, Phone, MessageCircle, Clock, DollarSign, Home, Heart, Laptop, Coffee, BookOpen, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { API_ROUTES } from '@/lib/api'


interface ApplicationFormData {
  name: string
  email: string
  phone: string
  address: string
  position: string
  coverLetter: string
  resumeUrl: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const CareerPage = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    coverLetter: '',
    resumeUrl: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })
  
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      setStatus({
        type: 'error',
        message: 'Please upload a PDF or Word document for your resume.'
      })
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setStatus({
        type: 'error',
        message: 'Resume file size must be less than 5MB.'
      })
      return
    }

    setResumeFile(file)
    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(API_ROUTES.UPLOAD.SINGLE, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        setFormData(prev => ({
          ...prev,
          resumeUrl: result.url
        }))
        setStatus({
          type: 'success',
          message: 'Resume uploaded successfully!'
        })
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to upload resume. Please try again.'
      })
      setResumeFile(null)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.position || !formData.resumeUrl) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields and upload your resume.'
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
      message: 'Submitting your application...'
    })

    try {
      const response = await fetch(API_ROUTES.JOB_APPLICATIONS.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Application submitted successfully! We\'ll review your application and get back to you soon.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          position: '',
          coverLetter: '',
          resumeUrl: ''
        })
        setResumeFile(null)
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your application. Please try again.'
      })
    }
  }

 const benefits = [
    {
      icon: Clock,
      title: "Flexible Work Hours",
      description: "Work-life balance with flexible scheduling and remote options",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses",
      color: "pink"
    },
    {
      icon: BookOpen,
      title: "Learning & Development", 
      description: "Continuous learning opportunities with courses, conferences, and certifications",
      color: "blue"
    },
    {
      icon: Laptop,
      title: "Latest Technology",
      description: "Work with cutting-edge tools and equipment",
      color: "pink"
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Hybrid and fully remote work options available",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship and leadership opportunities",
      color: "pink"
    }
  ]

  const openings = [
    {
      icon: Code,
      title: "Frontend Developer",
      description: "Create engaging and responsive user interfaces for the web applications using modern frameworks.",
      color: "blue"
    },
    {
      icon: Database,
      title: "Backend Developer", 
      description: "Design, implement, and manage server-side logic, databases, and APIs for scalable applications.",
      color: "pink"
    },
    {
      icon: BarChart,
      title: "Digital Marketing Specialist",
      description: "Develop and execute SEO, PPC, and social media strategies to grow our digital businesses.",
      color: "blue"
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      description: "Design intuitive and visually appealing user experiences that solve real user problems.",
      color: "pink"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We're building innovative solutions and looking for talented individuals to grow with us
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Why Join Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500">⚡</span> Why Join Us?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 ${benefit.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Career Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-2">Be part of something great</h3>
                    <p className="text-blue-100">Join our innovative team and make an impact</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply Now</h2>
              <p className="text-gray-600 mb-6">Ready to join our team? Fill out the form below and we'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full h-11 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full h-11 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applying For *
                  </label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Frontend Developer"
                    className="w-full h-11 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-400 transition-colors duration-200">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-600 text-center">
                        {resumeFile ? resumeFile.name : 'Choose File or Drag & Drop'}
                      </span>
                      <span className="text-xs text-gray-500">No file chosen</span>
                      {isUploading && (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm text-gray-500">Uploading...</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Status Message */}
                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg flex items-center space-x-2 text-sm ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-pink-50 text-pink-800 border border-pink-200'
                    }`}
                  >
                    {status.type === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status.type === 'success' && <CheckCircle className="w-4 h-4" />}
                    {status.type === 'error' && <AlertCircle className="w-4 h-4" />}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting Application
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${job.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-xl flex items-center justify-center mb-4`}>
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareerPage
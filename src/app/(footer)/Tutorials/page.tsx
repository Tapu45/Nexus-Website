"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Filter,
  Search,
  Download,
  Code,
  Database,
  Shield,
  Rocket,
  Settings,
  Globe,
  Coffee,
  Zap,
  Target,
  Award,
  CheckCircle,
  ExternalLink,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  PlayCircle,
  Video,
  FileText,
  Headphones,
  Monitor,
  Smartphone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TutorialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Topics", icon: Globe, color: "text-gray-600" },
    { id: "getting-started", name: "Getting Started", icon: Rocket, color: "text-blue-600" },
    { id: "api-integration", name: "API Integration", icon: Code, color: "text-pink-600" },
    { id: "frontend", name: "Frontend Development", icon: Monitor, color: "text-blue-600" },
    { id: "backend", name: "Backend Development", icon: Database, color: "text-pink-600" },
    { id: "security", name: "Security", icon: Shield, color: "text-blue-600" },
    { id: "devops", name: "DevOps", icon: Settings, color: "text-pink-600" }
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" }
  ];

  const types = [
    { id: "all", name: "All Types", icon: Globe },
    { id: "video", name: "Video", icon: Video },
    { id: "article", name: "Article", icon: FileText },
    { id: "interactive", name: "Interactive", icon: PlayCircle },
    { id: "podcast", name: "Podcast", icon: Headphones }
  ];

  const featuredTutorials = [
    {
      id: 1,
      title: "Complete API Integration Guide",
      description: "Learn how to integrate our REST API into your applications with practical examples and best practices.",
      thumbnail: "/api/placeholder/400/250",
      duration: "45 min",
      level: "Beginner",
      category: "api-integration",
      type: "video",
      author: "Sarah Johnson",
      authorAvatar: "SJ",
      rating: 4.9,
      students: 2450,
      published: "2 days ago",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Advanced Security Implementation",
      description: "Implement enterprise-grade security features including authentication, authorization, and data encryption.",
      thumbnail: "/api/placeholder/400/250",
      duration: "1h 20min",
      level: "Advanced",
      category: "security",
      type: "video",
      author: "Michael Chen",
      authorAvatar: "MC",
      rating: 4.8,
      students: 1680,
      published: "1 week ago",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 3,
      title: "Building Scalable Frontend Applications",
      description: "Create modern, responsive web applications using React, Next.js, and advanced optimization techniques.",
      thumbnail: "/api/placeholder/400/250",
      duration: "55 min",
      level: "Intermediate",
      category: "frontend",
      type: "video",
      author: "Emily Rodriguez",
      authorAvatar: "ER",
      rating: 4.7,
      students: 3200,
      published: "3 days ago",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ];

  const tutorials = [
    {
      id: 4,
      title: "Getting Started with Nexus Platform",
      description: "Your first steps into the Nexus ecosystem - setup, configuration, and basic usage.",
      thumbnail: "/api/placeholder/300/200",
      duration: "25 min",
      level: "Beginner",
      category: "getting-started",
      type: "video",
      author: "David Kim",
      authorAvatar: "DK",
      rating: 4.6,
      students: 5240,
      published: "1 week ago",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 5,
      title: "Database Design Best Practices",
      description: "Learn how to design efficient, scalable databases for modern applications.",
      thumbnail: "/api/placeholder/300/200",
      duration: "40 min",
      level: "Intermediate",
      category: "backend",
      type: "article",
      author: "Lisa Wang",
      authorAvatar: "LW",
      rating: 4.8,
      students: 1890,
      published: "5 days ago",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 6,
      title: "DevOps Pipeline Automation",
      description: "Automate your deployment process with CI/CD pipelines, Docker, and Kubernetes.",
      thumbnail: "/api/placeholder/300/200",
      duration: "1h 10min",
      level: "Advanced",
      category: "devops",
      type: "interactive",
      author: "Robert Taylor",
      authorAvatar: "RT",
      rating: 4.9,
      students: 980,
      published: "2 weeks ago",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 7,
      title: "Mobile-First Frontend Development",
      description: "Create responsive, mobile-optimized applications with modern CSS and JavaScript.",
      thumbnail: "/api/placeholder/300/200",
      duration: "35 min",
      level: "Intermediate",
      category: "frontend",
      type: "video",
      author: "Anna Martinez",
      authorAvatar: "AM",
      rating: 4.7,
      students: 2100,
      published: "1 week ago",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 8,
      title: "API Security Fundamentals",
      description: "Secure your APIs with authentication, rate limiting, and data validation techniques.",
      thumbnail: "/api/placeholder/300/200",
      duration: "30 min",
      level: "Beginner",
      category: "security",
      type: "article",
      author: "James Wilson",
      authorAvatar: "JW",
      rating: 4.5,
      students: 1560,
      published: "4 days ago",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 9,
      title: "Microservices Architecture Deep Dive",
      description: "Design and implement scalable microservices using modern patterns and tools.",
      thumbnail: "/api/placeholder/300/200",
      duration: "1h 30min",
      level: "Advanced",
      category: "backend",
      type: "video",
      author: "Chris Brown",
      authorAvatar: "CB",
      rating: 4.8,
      students: 750,
      published: "1 week ago",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ];

  const learningPaths = [
    {
      title: "Full Stack Developer Path",
      description: "Complete journey from frontend to backend development",
      courses: 12,
      duration: "40 hours",
      level: "Beginner to Advanced",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "API Developer Specialist",
      description: "Master API design, development, and integration",
      courses: 8,
      duration: "25 hours",
      level: "Intermediate",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      title: "DevOps Engineer Track",
      description: "Learn deployment, monitoring, and infrastructure management",
      courses: 10,
      duration: "35 hours",
      level: "Intermediate to Advanced",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Security Specialist Path",
      description: "Comprehensive security training for modern applications",
      courses: 6,
      duration: "20 hours",
      level: "All Levels",
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || tutorial.level.toLowerCase() === selectedLevel;
    const matchesType = selectedType === "all" || tutorial.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesType;
  });

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'article': return FileText;
      case 'interactive': return PlayCircle;
      case 'podcast': return Headphones;
      default: return BookOpen;
    }
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
            <PlayCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-pink-600">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Master new skills with our comprehensive tutorials. From beginner guides to advanced techniques, 
              learn at your own pace with expert-created content.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search tutorials, courses, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-600 bg-gray-800 text-white rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-lg placeholder-gray-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tutorials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with our most popular and highly-rated tutorials, handpicked by our expert team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <Play className={`w-16 h-16 ${tutorial.textColor} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`${tutorial.bgColor} ${tutorial.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${getLevelColor(tutorial.level)} px-2 py-1 rounded text-sm font-medium`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 ${tutorial.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                        {tutorial.authorAvatar}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{tutorial.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{tutorial.published}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tutorial.students.toLocaleString()} students</span>
                    <button className={`${tutorial.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white px-4 py-2 rounded-lg transition-colors font-medium`}>
                      Start Learning
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Tutorial Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-600 focus:border-transparent outline-none"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  {types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                    setSelectedType("all");
                    setSearchTerm("");
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Tutorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial, index) => {
              const TypeIcon = getTypeIcon(tutorial.type);
              return (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                      <TypeIcon className={`w-12 h-12 ${tutorial.textColor} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${getLevelColor(tutorial.level)} px-2 py-1 rounded text-xs font-medium`}>
                        {tutorial.level}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 ${tutorial.color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} rounded-full flex items-center justify-center text-white text-xs font-semibold`}>
                          {tutorial.authorAvatar}
                        </div>
                        <span className="text-xs text-gray-600 ml-2">{tutorial.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{tutorial.students.toLocaleString()}</span>
                    </div>
                    
                    <button className={`w-full ${tutorial.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm`}>
                      Start Tutorial
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tutorials found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow structured learning paths designed to take you from beginner to expert in specific domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${path.bgColor} rounded-xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-3">{path.description}</p>
                  </div>
                  <Target className={`w-8 h-8 ${path.textColor} flex-shrink-0`} />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{path.courses}</div>
                    <div className="text-sm text-gray-500">Courses</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{path.duration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{path.level}</div>
                    <div className="text-sm text-gray-500">Level</div>
                  </div>
                </div>
                
                <button className={`w-full ${path.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} text-white py-3 px-4 rounded-lg transition-colors font-medium`}>
                  Start Learning Path
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Video, value: "120+", label: "Video Tutorials", color: "text-blue-600", bgColor: "bg-blue-50" },
              { icon: FileText, value: "85+", label: "Written Guides", color: "text-pink-600", bgColor: "bg-pink-50" },
              { icon: Users, value: "25K+", label: "Students", color: "text-blue-600", bgColor: "bg-blue-50" },
              { icon: Award, value: "98%", label: "Completion Rate", color: "text-pink-600", bgColor: "bg-pink-50" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${stat.bgColor} rounded-xl p-6 text-center`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are advancing their skills with our expert-created tutorials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Browse All Tutorials
              </button>
              <Link 
                href="/signup"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium inline-block"
              >
                Create Free Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;
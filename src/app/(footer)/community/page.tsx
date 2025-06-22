"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Trophy, 
  Star,
  Heart,
  Share2,
  Eye,
  ThumbsUp,
  MessageCircle,
  Clock,
  Tag,
  TrendingUp,
  Award,
  Zap,
  Globe,
  Code,
  BookOpen,
  Coffee,
  Rocket,
  Target,
  Search,
  Filter,
  Plus,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const stats = [
    { 
      icon: Users, 
      value: "15.2K", 
      label: "Active Members", 
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: MessageSquare, 
      value: "8.5K", 
      label: "Discussions", 
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    { 
      icon: Trophy, 
      value: "2.1K", 
      label: "Solutions", 
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: Star, 
      value: "98%", 
      label: "Satisfaction", 
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  const featuredMembers = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      avatar: "SJ",
      posts: 156,
      solutions: 89,
      reputation: 2450,
      badge: "Expert",
      badgeColor: "bg-blue-600"
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      avatar: "MC",
      posts: 203,
      solutions: 134,
      reputation: 3200,
      badge: "Mentor",
      badgeColor: "bg-pink-600"
    },
    {
      name: "Emily Rodriguez",
      role: "DevOps Engineer",
      avatar: "ER",
      posts: 98,
      solutions: 67,
      reputation: 1890,
      badge: "Rising Star",
      badgeColor: "bg-blue-600"
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      avatar: "DK",
      posts: 174,
      solutions: 102,
      reputation: 2780,
      badge: "Helper",
      badgeColor: "bg-pink-600"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for API rate limiting implementation",
      author: "Alex Thompson",
      avatar: "AT",
      category: "Development",
      replies: 23,
      views: 1240,
      lastActivity: "2 hours ago",
      tags: ["API", "Rate Limiting", "Backend"],
      solved: true,
      categoryColor: "text-blue-600",
      categoryBg: "bg-blue-50"
    },
    {
      id: 2,
      title: "How to handle user authentication in microservices?",
      author: "Maria Garcia",
      avatar: "MG",
      category: "Security",
      replies: 18,
      views: 856,
      lastActivity: "4 hours ago",
      tags: ["Authentication", "Microservices", "JWT"],
      solved: false,
      categoryColor: "text-pink-600",
      categoryBg: "bg-pink-50"
    },
    {
      id: 3,
      title: "Performance optimization tips for React applications",
      author: "John Wilson",
      avatar: "JW",
      category: "Frontend",
      replies: 31,
      views: 1567,
      lastActivity: "6 hours ago",
      tags: ["React", "Performance", "Optimization"],
      solved: true,
      categoryColor: "text-blue-600",
      categoryBg: "bg-blue-50"
    },
    {
      id: 4,
      title: "Database design patterns for scalable applications",
      author: "Lisa Chen",
      avatar: "LC",
      category: "Database",
      replies: 15,
      views: 692,
      lastActivity: "8 hours ago",
      tags: ["Database", "Scaling", "Architecture"],
      solved: false,
      categoryColor: "text-pink-600",
      categoryBg: "bg-pink-50"
    },
    {
      id: 5,
      title: "Implementing CI/CD pipeline with Docker and Kubernetes",
      author: "Robert Taylor",
      avatar: "RT",
      category: "DevOps",
      replies: 27,
      views: 1123,
      lastActivity: "12 hours ago",
      tags: ["CI/CD", "Docker", "Kubernetes"],
      solved: true,
      categoryColor: "text-blue-600",
      categoryBg: "bg-blue-50"
    }
  ];

  const events = [
    {
      title: "Weekly Developer Meetup",
      date: "June 28, 2024",
      time: "6:00 PM EST",
      type: "Virtual",
      attendees: 145,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "API Design Workshop",
      date: "July 5, 2024",
      time: "2:00 PM EST",
      type: "Hybrid",
      attendees: 89,
      color: "bg-pink-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      title: "Open Source Contribution Day",
      date: "July 12, 2024",
      time: "10:00 AM EST",
      type: "Virtual",
      attendees: 203,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Security Best Practices Seminar",
      date: "July 19, 2024",
      time: "4:00 PM EST",
      type: "In-Person",
      attendees: 67,
      color: "bg-pink-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: Globe },
    { id: "development", name: "Development", icon: Code },
    { id: "security", name: "Security", icon: Target },
    { id: "frontend", name: "Frontend", icon: Rocket },
    { id: "backend", name: "Backend", icon: Zap },
    { id: "devops", name: "DevOps", icon: Coffee }
  ];

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
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-pink-600">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with developers, share knowledge, and grow together. 
              Join our vibrant community of innovators and problem solvers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
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

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: "discussions", name: "Discussions", icon: MessageSquare },
              { id: "events", name: "Events", icon: Calendar },
              { id: "members", name: "Members", icon: Users },
              { id: "resources", name: "Resources", icon: BookOpen }
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? index % 2 === 0
                      ? "border-blue-600 text-blue-600"
                      : "border-pink-600 text-pink-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "discussions" && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* New Discussion Button */}
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    New Discussion
                  </button>

                  {/* Categories */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left flex items-center p-2 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? index % 2 === 0
                                ? "bg-blue-50 text-blue-600"
                                : "bg-pink-50 text-pink-600"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Featured Members */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Top Contributors</h3>
                    <div className="space-y-3">
                      {featuredMembers.slice(0, 3).map((member, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-8 h-8 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-pink-600'} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                            {member.avatar}
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            <div className="text-xs text-gray-500">{member.solutions} solutions</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Discussions List */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-pink-600'} rounded-full flex items-center justify-center text-white font-semibold`}>
                            {discussion.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{discussion.author}</div>
                            <div className="text-sm text-gray-500">{discussion.lastActivity}</div>
                          </div>
                        </div>
                        <span className={`${discussion.categoryBg} ${discussion.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                          {discussion.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        {discussion.title}
                        {discussion.solved && (
                          <span className="ml-2 inline-flex items-center">
                            <Award className="w-4 h-4 text-green-500" />
                          </span>
                        )}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {discussion.views} views
                          </span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                          Join Discussion
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join our community events to learn, network, and grow together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${event.bgColor} rounded-xl p-6 border border-gray-200`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${event.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {event.type}
                      </span>
                      <Calendar className={`w-5 h-5 ${event.textColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    
                    <button className={`w-full ${event.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium`}>
                      Register Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "members" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Members</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Meet our top contributors and community leaders.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className={`w-16 h-16 ${member.badgeColor} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                      {member.avatar}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                    
                    <span className={`${member.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block`}>
                      {member.badge}
                    </span>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{member.posts}</div>
                        <div className="text-xs text-gray-500">Posts</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{member.solutions}</div>
                        <div className="text-xs text-gray-500">Solutions</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{member.reputation}</div>
                        <div className="text-xs text-gray-500">Rep</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "resources" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Resources</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Access tutorials, guides, and tools shared by our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "API Integration Guide",
                    description: "Complete tutorial on integrating with our APIs",
                    type: "Tutorial",
                    author: "Community Team",
                    downloads: "2.4k",
                    color: "text-blue-600",
                    bgColor: "bg-blue-50",
                    icon: Code
                  },
                  {
                    title: "Security Checklist",
                    description: "Essential security practices for developers",
                    type: "Checklist",
                    author: "Security Team",
                    downloads: "1.8k",
                    color: "text-pink-600",
                    bgColor: "bg-pink-50",
                    icon: Target
                  },
                  {
                    title: "Best Practices Guide",
                    description: "Development best practices and patterns",
                    type: "Guide",
                    author: "Dev Community",
                    downloads: "3.1k",
                    color: "text-blue-600",
                    bgColor: "bg-blue-50",
                    icon: BookOpen
                  },
                  {
                    title: "Code Templates",
                    description: "Ready-to-use code templates and snippets",
                    type: "Templates",
                    author: "Contributors",
                    downloads: "1.5k",
                    color: "text-pink-600",
                    bgColor: "bg-pink-50",
                    icon: Rocket
                  },
                  {
                    title: "Testing Framework",
                    description: "Comprehensive testing tools and examples",
                    type: "Framework",
                    author: "QA Team",
                    downloads: "987",
                    color: "text-blue-600",
                    bgColor: "bg-blue-50",
                    icon: Zap
                  },
                  {
                    title: "Deployment Scripts",
                    description: "Automated deployment scripts and configs",
                    type: "Scripts",
                    author: "DevOps Team",
                    downloads: "756",
                    color: "text-pink-600",
                    bgColor: "bg-pink-50",
                    icon: Coffee
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${resource.bgColor} rounded-xl p-6 hover:shadow-md transition-shadow`}
                  >
                    <resource.icon className={`w-8 h-8 ${resource.color} mb-4`} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">By {resource.author}</span>
                      <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                    </div>
                    
                    <button className={`w-full border-2 ${resource.color.replace('text-', 'border-')} ${resource.color} py-2 px-4 rounded-lg hover:bg-opacity-10 transition-colors font-medium`}>
                      Download {resource.type}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with thousands of developers, share your knowledge, and accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Join Community
              </button>
              <Link 
                href="/signup"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium inline-block"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
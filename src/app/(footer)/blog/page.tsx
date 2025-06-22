"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  TrendingUp,
  Eye,
  Share2,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    "All", "Technology", "Development", "AI/ML", "Business", "Design", "DevOps"
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Business: Transforming Industries in 2024",
    excerpt: "Explore how artificial intelligence is revolutionizing business operations, customer experiences, and decision-making processes across various industries. From automated customer service to predictive analytics, AI is reshaping how companies operate and compete in the modern marketplace.",
    author: "Sarah Johnson",
    date: "2024-06-15",
    readTime: "8 min read",
    category: "AI/ML",
    image: "https://miro.medium.com/v2/resize:fit:900/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
    views: "2.3k",
    featured: true,
    content: `
      <h2>The AI Revolution in Business</h2>
      <p>Artificial Intelligence has moved from science fiction to business reality. Companies across industries are leveraging AI to streamline operations, enhance customer experiences, and gain competitive advantages.</p>
      
      <h3>Key Areas of AI Implementation</h3>
      <ul>
        <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants provide 24/7 support</li>
        <li><strong>Predictive Analytics:</strong> Machine learning algorithms forecast market trends and customer behavior</li>
        <li><strong>Process Automation:</strong> RPA combined with AI automates complex business processes</li>
        <li><strong>Personalization:</strong> AI enables hyper-personalized customer experiences</li>
      </ul>
      
      <h3>Industry Impact</h3>
      <p>Healthcare, finance, retail, and manufacturing are seeing unprecedented transformation through AI adoption. Companies implementing AI solutions report 15-25% improvements in operational efficiency.</p>
      
      <h3>Looking Ahead</h3>
      <p>As AI technology continues to evolve, businesses must prepare for even more sophisticated applications including autonomous decision-making systems and advanced predictive capabilities.</p>
    `
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "Learn best practices for creating robust microservices architecture that can handle enterprise-level traffic and complexity. This comprehensive guide covers containerization, service discovery, and deployment strategies.",
      author: "Michael Chen",
      date: "2024-06-12",
      readTime: "6 min read",
      category: "Development",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQH7sf0qnUFRJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737695685380?e=2147483647&v=beta&t=uDHofzz7Jcz8E789qGlzyB8PEQtXU0aSLr9pQ7y6aTM",
      views: "1.8k",
      content: `
        <h2>Introduction to Microservices</h2>
        <p>Microservices architecture has become the gold standard for building scalable, maintainable applications. This approach breaks down monolithic applications into smaller, independent services.</p>
        
        <h3>Why Node.js and Docker?</h3>
        <p>Node.js provides excellent performance for I/O intensive operations, while Docker ensures consistent deployment across environments.</p>
        
        <h3>Key Implementation Steps</h3>
        <ol>
          <li>Service Decomposition: Break your application into logical business domains</li>
          <li>API Gateway: Implement a single entry point for client requests</li>
          <li>Service Discovery: Enable services to find and communicate with each other</li>
          <li>Load Balancing: Distribute traffic across service instances</li>
          <li>Monitoring: Implement comprehensive logging and metrics</li>
        </ol>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Keep services small and focused on a single business capability</li>
          <li>Use asynchronous communication where possible</li>
          <li>Implement circuit breakers for fault tolerance</li>
          <li>Automate testing and deployment pipelines</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest design trends, from minimalist interfaces to immersive experiences that enhance user engagement. Learn how modern design principles are shaping digital experiences across platforms.",
      author: "Emily Rodriguez",
      date: "2024-06-10",
      readTime: "5 min read",
      category: "Design",
      image: "https://community.nasscom.in/sites/default/files/media/images/What%20is%20UIUX%20Transformation%20and%20How%20Does%20it%20Benefit%20Businesses-04_0.jpg",
      views: "1.5k",
      content: `
        <h2>Design Evolution in 2024</h2>
        <p>The design landscape continues to evolve, with new trends emerging that prioritize user experience, accessibility, and visual appeal.</p>
        
        <h3>Top Design Trends</h3>
        <ul>
          <li><strong>Minimalist Design:</strong> Clean, uncluttered interfaces that focus on content</li>
          <li><strong>Dark Mode:</strong> Reduced eye strain and modern aesthetic appeal</li>
          <li><strong>Micro-interactions:</strong> Small animations that enhance user engagement</li>
          <li><strong>Voice User Interfaces:</strong> Integration of voice commands and responses</li>
          <li><strong>Augmented Reality:</strong> Immersive experiences in mobile and web applications</li>
        </ul>
        
        <h3>User-Centered Design</h3>
        <p>Modern design emphasizes accessibility, ensuring applications work for users with disabilities. This includes proper color contrast, keyboard navigation, and screen reader compatibility.</p>
        
        <h3>Mobile-First Approach</h3>
        <p>With mobile traffic exceeding desktop, designers must prioritize mobile experiences while ensuring seamless transitions across devices.</p>
      `
    },
    {
      id: 4,
      title: "DevOps Best Practices for Continuous Integration",
      excerpt: "Streamline your development workflow with proven CI/CD strategies that reduce deployment risks and improve team collaboration. Explore tools and methodologies that enhance software delivery.",
      author: "David Kim",
      date: "2024-06-08",
      readTime: "7 min read",
      category: "DevOps",
      image: "https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960",
      views: "1.2k",
      content: `
        <h2>Understanding DevOps and CI/CD</h2>
        <p>DevOps practices bridge the gap between development and operations teams, enabling faster, more reliable software delivery through automation and collaboration.</p>
        
        <h3>CI/CD Pipeline Components</h3>
        <ul>
          <li><strong>Source Control:</strong> Git-based version control with branching strategies</li>
          <li><strong>Automated Testing:</strong> Unit, integration, and end-to-end testing</li>
          <li><strong>Build Automation:</strong> Consistent compilation and packaging</li>
          <li><strong>Deployment Automation:</strong> Automated release to various environments</li>
          <li><strong>Monitoring:</strong> Real-time application and infrastructure monitoring</li>
        </ul>
        
        <h3>Key Tools and Technologies</h3>
        <p>Popular tools include Jenkins, GitLab CI, Docker, Kubernetes, Terraform, and monitoring solutions like Prometheus and Grafana.</p>
        
        <h3>Benefits of Implementation</h3>
        <ul>
          <li>Reduced deployment time from hours to minutes</li>
          <li>Improved code quality through automated testing</li>
          <li>Enhanced collaboration between teams</li>
          <li>Faster time-to-market for new features</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential security measures and tools to protect your business from evolving cyber threats in a distributed work environment. Learn about modern security frameworks and implementation strategies.",
      author: "Lisa Thompson",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "Technology",
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
      views: "2.1k",
      content: `
        <h2>Remote Work Security Challenges</h2>
        <p>The shift to remote work has expanded attack surfaces and created new cybersecurity challenges. Organizations must adapt their security strategies to protect distributed workforces.</p>
        
        <h3>Key Security Threats</h3>
        <ul>
          <li><strong>Phishing Attacks:</strong> Increased targeting of remote workers</li>
          <li><strong>Unsecured Networks:</strong> Home Wi-Fi and public network vulnerabilities</li>
          <li><strong>Device Security:</strong> Personal devices accessing corporate resources</li>
          <li><strong>Cloud Security:</strong> Protecting data in cloud-based applications</li>
        </ul>
        
        <h3>Essential Security Measures</h3>
        <ol>
          <li>Implement Zero Trust Architecture</li>
          <li>Use Multi-Factor Authentication (MFA)</li>
          <li>Deploy VPN solutions for secure connections</li>
          <li>Regular security training for employees</li>
          <li>Endpoint Detection and Response (EDR) tools</li>
        </ol>
        
        <h3>Security Best Practices</h3>
        <p>Regular security audits, incident response planning, and continuous monitoring are essential for maintaining robust cybersecurity in remote work environments.</p>
      `
    },
    {
      id: 6,
      title: "Digital Transformation Strategies for SMBs",
      excerpt: "Practical approaches for small and medium businesses to embrace digital transformation without breaking the budget. Discover cost-effective solutions and implementation roadmaps.",
      author: "John Carter",
      date: "2024-06-03",
      readTime: "8 min read",
      category: "Business",
      image: "https://visualitynq.com/app/uploads/SMB1-copy-clear-letters.jpg",
      views: "1.7k",
      content: `
        <h2>Digital Transformation for SMBs</h2>
        <p>Small and medium businesses face unique challenges in digital transformation. Limited budgets and resources require strategic approaches to technology adoption.</p>
        
        <h3>Key Transformation Areas</h3>
        <ul>
          <li><strong>Cloud Migration:</strong> Moving from on-premise to cloud-based solutions</li>
          <li><strong>Process Automation:</strong> Automating repetitive tasks and workflows</li>
          <li><strong>Customer Experience:</strong> Enhancing touchpoints across customer journey</li>
          <li><strong>Data Analytics:</strong> Leveraging data for business insights</li>
        </ul>
        
        <h3>Implementation Strategy</h3>
        <ol>
          <li>Assess current technology infrastructure</li>
          <li>Identify high-impact, low-cost improvements</li>
          <li>Develop a phased implementation plan</li>
          <li>Train employees on new technologies</li>
          <li>Measure and optimize performance</li>
        </ol>
        
        <h3>Cost-Effective Solutions</h3>
        <p>SMBs can leverage SaaS solutions, open-source tools, and cloud platforms to achieve digital transformation goals without significant upfront investments.</p>
      `
    },
    {
      id: 7,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Navigate the complexities of cloud migration with our comprehensive guide covering planning, execution, and optimization. Learn about different migration strategies and best practices.",
      author: "Sarah Johnson",
      date: "2024-06-01",
      readTime: "10 min read",
      category: "Technology",
      image: "https://www.finoit.com/wp-content/uploads/2023/09/On-premise-to-cloud-migration-process.jpg",
      views: "1.9k",
      content: `
        <h2>Understanding Cloud Migration</h2>
        <p>Cloud migration involves moving applications, data, and infrastructure from on-premise environments to cloud platforms. This process requires careful planning and execution.</p>
        
        <h3>Migration Strategies</h3>
        <ul>
          <li><strong>Rehosting (Lift and Shift):</strong> Moving applications without modifications</li>
          <li><strong>Replatforming:</strong> Making minimal changes to optimize for cloud</li>
          <li><strong>Refactoring:</strong> Redesigning applications for cloud-native architecture</li>
          <li><strong>Replacing:</strong> Moving to SaaS solutions</li>
        </ul>
        
        <h3>Migration Process</h3>
        <ol>
          <li>Assessment and Planning</li>
          <li>Choosing the Right Cloud Provider</li>
          <li>Data Migration Strategy</li>
          <li>Application Migration</li>
          <li>Testing and Validation</li>
          <li>Go-Live and Optimization</li>
        </ol>
        
        <h3>Best Practices</h3>
        <p>Start with less critical applications, implement proper backup strategies, and ensure security compliance throughout the migration process.</p>
      `
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#FF0083]">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in technology, 
              business, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF0083] focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="text-gray-500 w-5 h-5 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#FF0083] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-[#FF0083] mr-3" />
              Featured Article
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF0083] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-[#FF0083] font-medium hover:text-[#e6007a] transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm text-gray-600 px-2 py-1 rounded-full text-sm">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#FF0083] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#FF0083] font-medium hover:text-[#e6007a] transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <button className="text-gray-400 hover:text-[#FF0083] transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-[#FF0083] to-[#FF4081] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {!isSubscribed ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, insights, and tech updates delivered directly to your inbox.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                  />
                  <button 
                    type="submit"
                    className="bg-white text-[#FF0083] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="w-16 h-16 text-white mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Successfully Subscribed!
                </h2>
                <p className="text-white/90 text-lg">
                  Thank you for subscribing to our newsletter. You'll receive the latest updates soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
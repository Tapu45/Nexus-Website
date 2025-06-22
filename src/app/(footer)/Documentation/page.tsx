"use client";

import { motion } from "framer-motion";
import {
  Book,
  Search,
  ChevronRight,
  Download,
  FileText,
  Code,
  Settings,
  Users,
  Shield,
  Rocket,
  ExternalLink,
  Copy,
  CheckCircle,
  PlayCircle,
  MessageCircle,
  Star,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("getting-started");
  const [copiedCode, setCopiedCode] = useState("");

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Rocket,
      description: "Quick start guides and setup instructions",
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: Code,
      description: "Complete API documentation and examples",
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: Settings,
      description: "Third-party integrations and plugins",
    },
    {
      id: "user-guides",
      title: "User Guides",
      icon: Users,
      description: "Step-by-step tutorials and best practices",
    },
    {
      id: "security",
      title: "Security",
      icon: Shield,
      description: "Security guidelines and compliance",
    },
    {
      id: "resources",
      title: "Resources",
      icon: FileText,
      description: "Additional resources and downloads",
    },
  ];

  const documentation = {
    "getting-started": [
      {
        title: "Quick Start Guide",
        description: "Get up and running in under 5 minutes",
        readTime: "3 min",
        difficulty: "Beginner",
        content: `
          <h3>Installation</h3>
          <pre><code>npm install @nexus/sdk
# or
yarn add @nexus/sdk</code></pre>
          
          <h3>Basic Setup</h3>
          <pre><code>import { NexusClient } from '@nexus/sdk';

const client = new NexusClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Initialize your first service
client.initialize();</code></pre>
          
          <h3>Your First API Call</h3>
          <pre><code>const response = await client.services.getData({
  endpoint: '/users',
  params: { limit: 10 }
});

console.log(response.data);</code></pre>
        `,
      },
      {
        title: "System Requirements",
        description: "Hardware and software requirements",
        readTime: "2 min",
        difficulty: "Beginner",
        content: `
          <h3>Minimum Requirements</h3>
          <ul>
            <li>Node.js 16.0 or higher</li>
            <li>2GB RAM minimum</li>
            <li>1GB free disk space</li>
            <li>Internet connection for API calls</li>
          </ul>
          
          <h3>Recommended</h3>
          <ul>
            <li>Node.js 18.0 or higher</li>
            <li>4GB RAM or more</li>
            <li>SSD storage</li>
            <li>Stable broadband connection</li>
          </ul>
        `,
      },
      {
        title: "Configuration",
        description: "Environment setup and configuration options",
        readTime: "5 min",
        difficulty: "Intermediate",
        content: `
          <h3>Environment Variables</h3>
          <pre><code>NEXUS_API_KEY=your_api_key_here
NEXUS_ENVIRONMENT=production
NEXUS_TIMEOUT=30000
NEXUS_RETRY_ATTEMPTS=3</code></pre>
          
          <h3>Config File</h3>
          <pre><code>{
  "apiKey": "your-api-key",
  "baseURL": "https://api.nexusinfotech.co",
  "timeout": 30000,
  "retries": 3,
  "logging": {
    "level": "info",
    "format": "json"
  }
}</code></pre>
        `,
      },
    ],
    "api-reference": [
      {
        title: "Authentication",
        description: "API key setup and authentication methods",
        readTime: "4 min",
        difficulty: "Beginner",
        content: `
          <h3>API Key Authentication</h3>
          <pre><code>curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.nexusinfotech.co/v1/users</code></pre>
          
          <h3>OAuth 2.0 (Enterprise)</h3>
          <pre><code>const token = await client.auth.getAccessToken({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  scope: 'read write'
});</code></pre>
        `,
      },
      {
        title: "REST Endpoints",
        description: "Complete list of available REST API endpoints",
        readTime: "8 min",
        difficulty: "Intermediate",
        content: `
          <h3>Users API</h3>
          <pre><code>GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/{id}
PUT    /api/v1/users/{id}
DELETE /api/v1/users/{id}</code></pre>
          
          <h3>Projects API</h3>
          <pre><code>GET    /api/v1/projects
POST   /api/v1/projects
GET    /api/v1/projects/{id}
PUT    /api/v1/projects/{id}
DELETE /api/v1/projects/{id}</code></pre>
        `,
      },
      {
        title: "WebSocket API",
        description: "Real-time communication with WebSocket",
        readTime: "6 min",
        difficulty: "Advanced",
        content: `
          <h3>Connection</h3>
          <pre><code>const ws = new WebSocket('wss://api.nexusinfotech.co/ws');

ws.onopen = function(event) {
  ws.send(JSON.stringify({
    type: 'authenticate',
    token: 'your-token'
  }));
};</code></pre>
          
          <h3>Event Handling</h3>
          <pre><code>ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};</code></pre>
        `,
      },
    ],
    integrations: [
      {
        title: "React Integration",
        description: "Using Nexus services in React applications",
        readTime: "7 min",
        difficulty: "Intermediate",
        content: `
          <h3>React Hook</h3>
          <pre><code>import { useNexus } from '@nexus/react';

function UserList() {
  const { data, loading, error } = useNexus('/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}</code></pre>
        `,
      },
      {
        title: "Next.js Integration",
        description: "Server-side rendering with Next.js",
        readTime: "6 min",
        difficulty: "Intermediate",
        content: `
          <h3>API Routes</h3>
          <pre><code>// pages/api/users.js
import { NexusClient } from '@nexus/sdk';

export default async function handler(req, res) {
  const client = new NexusClient(process.env.NEXUS_API_KEY);
  const users = await client.users.getAll();
  res.status(200).json(users);
}</code></pre>
        `,
      },
    ],
    "user-guides": [
      {
        title: "Dashboard Tutorial",
        description: "Complete guide to using the admin dashboard",
        readTime: "10 min",
        difficulty: "Beginner",
        content: `
          <h3>Dashboard Overview</h3>
          <p>The dashboard provides a comprehensive view of your account, projects, and analytics.</p>
          
          <h3>Navigation</h3>
          <ul>
            <li><strong>Projects:</strong> Manage your active projects</li>
            <li><strong>Analytics:</strong> View performance metrics</li>
            <li><strong>Settings:</strong> Configure account preferences</li>
            <li><strong>Billing:</strong> Manage subscription and payments</li>
          </ul>
        `,
      },
      {
        title: "Project Management",
        description: "How to create and manage projects effectively",
        readTime: "8 min",
        difficulty: "Beginner",
        content: `
          <h3>Creating a Project</h3>
          <ol>
            <li>Click "New Project" in the dashboard</li>
            <li>Enter project name and description</li>
            <li>Select project template</li>
            <li>Configure initial settings</li>
            <li>Click "Create Project"</li>
          </ol>
        `,
      },
    ],
    security: [
      {
        title: "Security Best Practices",
        description: "Keep your implementation secure",
        readTime: "6 min",
        difficulty: "Intermediate",
        content: `
          <h3>API Key Security</h3>
          <ul>
            <li>Never expose API keys in client-side code</li>
            <li>Use environment variables for sensitive data</li>
            <li>Rotate API keys regularly</li>
            <li>Implement proper access controls</li>
          </ul>
          
          <h3>Data Protection</h3>
          <ul>
            <li>Use HTTPS for all API calls</li>
            <li>Validate all input data</li>
            <li>Implement rate limiting</li>
            <li>Monitor for suspicious activity</li>
          </ul>
        `,
      },
    ],
    resources: [
      {
        title: "SDK Downloads",
        description: "Official SDKs and libraries",
        readTime: "2 min",
        difficulty: "Beginner",
        content: `
          <h3>Available SDKs</h3>
          <ul>
            <li>JavaScript/Node.js SDK</li>
            <li>Python SDK</li>
            <li>PHP SDK</li>
            <li>Java SDK</li>
            <li>C# SDK</li>
          </ul>
        `,
      },
    ],
  };

  const filteredDocs =
    documentation[selectedCategory as keyof typeof documentation]?.filter(
      (doc: { title: string; description: string; }) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
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
            <Book className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#FF0083]">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to integrate and use Nexus Infotech services.
              From quick start guides to advanced API references.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/4"
            >
              <div className="sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 mr-3" />
                        <div>
                          <div className="font-medium">{category.title}</div>
                          <div
                            className={`text-sm ${
                              selectedCategory === category.id
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>

                {/* Quick Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/api"
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      API Playground
                    </Link>
                    <Link
                      href="/support"
                      className="flex items-center text-gray-600 hover:text-[#FF0083] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Support
                    </Link>
                    <Link
                      href="/blog"
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Blog & Tutorials
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-3/4"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {categories.find((c) => c.id === selectedCategory)?.title}
                </h2>
                <p className="text-gray-600">
                  {
                    categories.find((c) => c.id === selectedCategory)
                      ?.description
                  }
                </p>
              </div>

              <div className="grid gap-6">
                {filteredDocs.map(
                  (
                    doc: {
                      title: string;
                      description: string;
                      readTime: string;
                      difficulty: string;
                      content: string;
                    },
                    index: number
                  ) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {doc.title}
                        </h3>
                        <span className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-4 h-4" />
                          {doc.readTime}
                        </span>
                      </div>
                      <div className="mb-3 text-gray-600">{doc.description}</div>
                      <div className="mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            doc.difficulty === "Beginner"
                              ? "bg-green-100 text-green-700"
                              : doc.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {doc.difficulty}
                        </span>
                      </div>
                      <div
                        className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-code:text-blue-600"
                        dangerouslySetInnerHTML={{ __html: doc.content }}
                      />
                    </motion.div>
                  )
                )}
              </div>

              {filteredDocs.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No documentation found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse different
                    categories.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to
              help you succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <MessageCircle className="w-8 h-8 text-[#FF0083] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get instant help from our support team
                </p>
                <button className="bg-[#FF0083] text-white px-4 py-2 rounded-lg hover:bg-[#e6007a] transition-colors">
                  Start Chat
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <PlayCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Video Tutorials
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Watch step-by-step video guides
                </p>
                <Link
                  href="/tutorials"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Watch Now
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Download className="w-8 h-8 text-[#FF0083] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Download SDK
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get our official development tools
                </p>
                <button className="bg-[#FF0083] text-white px-4 py-2 rounded-lg hover:bg-[#e6007a] transition-colors">
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;
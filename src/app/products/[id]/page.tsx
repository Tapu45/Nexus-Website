"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Star, 
  Check, 
  Download, 
  Play, 
  ExternalLink,
  Tag,
  Users,
  Building,
  Settings,
  Shield,
  Zap,
  Sparkles,
  Monitor,
  Smartphone,
  Code,
  Award,
  Globe,
  Layers,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import { API_ROUTES } from "@/lib/api";

interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Record<string, any>;
  benefits: string[];
  price: number;
  originalPrice?: number;
  currency: string;
  pricingModel: string;
  image: string;
  images: string[];
  videoUrl?: string;
  brochureUrl?: string;
  category: string;
  subCategory?: string;
  tags: string[];
  targetAudience: string[];
  industries: string[];
  useCases: string[];
  systemRequirements: Record<string, any>;
  compatibility: string[];
  integrations: string[];
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];
  status: string;
  isActive: boolean;
  isFeatured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const ProductDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_ROUTES.PRODUCTS.GET_BY_ID(productId));
        
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        
        const productData = await response.json();
        
        if (!productData) {
          setError('Product not found');
          return;
        }
        
        setProduct(productData);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6 shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Product Details</h3>
            <p className="text-gray-600">Please wait while we fetch the information...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="w-10 h-10 text-gray-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">{error || 'The requested product could not be found.'}</p>
            <button
              onClick={() => router.push('/products')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Back to Products
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkles, gradient: 'from-blue-500 to-blue-600' },
    { id: 'features', label: 'Features', icon: Check, gradient: 'from-pink-500 to-pink-600' },
    { id: 'benefits', label: 'Benefits', icon: TrendingUp, gradient: 'from-green-500 to-green-600' },
    { id: 'requirements', label: 'Requirements', icon: Shield, gradient: 'from-purple-500 to-purple-600' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-1/3 w-16 h-16 bg-purple-200 rounded-full opacity-15 blur-lg"
        />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 mb-4 group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold text-sm">Back</span>
          </motion.button>
          
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500 font-medium">Products</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="text-blue-600 font-semibold">{product.title}</span>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Product Images */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.div
              layoutId="productImage"
              className="relative aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-20"></div>
              
              <Image
                src={product.images?.[selectedImage] || product.image || '/placeholder-product.jpg'}
                alt={product.title}
                fill
                className="object-contain p-6 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating badge */}
              {product.isFeatured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                >
                  <Award size={12} />
                  Featured
                </motion.div>
              )}
            </motion.div>
            
            {product.images && product.images.length > 1 && (
              <motion.div 
                variants={fadeInUp}
                className="flex gap-3 overflow-x-auto pb-2"
              >
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 shadow-lg ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-blue-500/30 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-pink-300 hover:shadow-pink-500/20'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}

            {product.videoUrl && (
              <motion.a
                variants={fadeInUp}
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 group shadow-2xl hover:shadow-3xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Play size={18} className="text-white" />
                  </div>
                  <span>Watch Demo Video</span>
                </div>
              </motion.a>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                {product.category && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm flex items-center gap-2"
                  >
                    <Tag size={14} />
                    {product.category}
                  </motion.span>
                )}
                {product.isFeatured && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold border border-pink-200/50 shadow-sm flex items-center gap-2"
                  >
                    <Star size={14} />
                    Featured
                  </motion.span>
                )}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
              >
                {product.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {product.shortDescription}
              </motion.p>
            </div>

            {/* Download Brochure Button */}
            {product.brochureUrl && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-2"
              >
                <motion.a
                  href={product.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <div className="p-1 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Download size={16} />
                  </div>
                  <span>Download Brochure</span>
                </motion.a>
              </motion.div>
            )}

            {/* Quick Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              {product.targetAudience && product.targetAudience.length > 0 && (
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(239,246,255,0.9) 100%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-sm">
                      <Users size={18} className="text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Target Audience</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.targetAudience.slice(0, 3).map((audience, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-200/50 shadow-sm"
                      >
                        {audience}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {product.industries && product.industries.length > 0 && (
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(253,242,248,0.9) 100%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-sm">
                      <Building size={18} className="text-pink-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Industries</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.slice(0, 3).map((industry, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-sm font-medium border border-pink-200/50 shadow-sm"
                      >
                        {industry}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tabs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-3 px-8 rounded-xl font-semibold text-sm flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 border border-gray-200/50 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
              }}
            >
              {activeTab === 'overview' && (
                <div className="prose prose-gray max-w-none">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    dangerouslySetInnerHTML={{ __html: product.description || '' }} 
                  />
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3"
                  >
                    <div className="p-2 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-sm">
                      <Check className="w-6 h-6 text-pink-600" />
                    </div>
                    Product Features
                  </motion.h3>
                  {product.features && product.features.length > 0 ? (
                    <motion.div 
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {product.features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="bg-gradient-to-br from-white to-pink-50/50 p-6 rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg shadow-sm">
                              <Check size={16} className="text-pink-600" />
                            </div>
                            <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <p className="text-gray-500 text-center py-12">No features available</p>
                  )}
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3"
                  >
                    <div className="p-2 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-sm">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    Key Benefits
                  </motion.h3>
                  {product.benefits && product.benefits.length > 0 ? (
                    <motion.div 
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {product.benefits.map((benefit, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="bg-gradient-to-br from-white to-green-50/50 p-6 rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-sm">
                              <TrendingUp size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700 leading-relaxed font-medium">{benefit}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <p className="text-gray-500 text-center py-12">No benefits available</p>
                  )}
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-10">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3"
                    >
                      <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-sm">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      System Requirements
                    </motion.h3>
                    {product.systemRequirements && Object.keys(product.systemRequirements).length > 0 ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-gradient-to-br from-purple-50/50 to-white p-8 rounded-xl border border-gray-200/50 shadow-lg"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.entries(product.systemRequirements).map(([key, value], index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border border-gray-100 shadow-sm"
                            >
                              <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-sm">
                                <Monitor size={16} className="text-purple-600" />
                              </div>
                              <div>
                                <span className="font-semibold text-gray-900 capitalize block">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-gray-600 text-sm">
                                  {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-gray-500 text-center py-12">No system requirements specified</p>
                    )}
                  </div>

                  {product.compatibility && product.compatibility.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-sm">
                          <Smartphone size={18} className="text-blue-600" />
                        </div>
                        Compatibility
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {product.compatibility.map((item, index) => (
                          <motion.span 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {product.integrations && product.integrations.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-sm">
                          <Code size={18} className="text-pink-600" />
                        </div>
                        Integrations
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {product.integrations.map((integration, index) => (
                          <motion.span 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold border border-pink-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {integration}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
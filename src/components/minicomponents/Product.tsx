"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_ROUTES } from "@/lib/api";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  category: string;
  tags: string[];
  targetAudience: string[];
  industries: string[];
  status: string;
  isActive: boolean;
  isFeatured: boolean;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({});
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_ROUTES.PRODUCTS.GET_BY_STATUS('published'));
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        const activeProducts = data
          .filter((product: Product) => product.isActive)
          .slice(0, 6);

        setProducts(activeProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle image load and get dimensions
  const handleImageLoad = (productId: string, event: any) => {
    const img = event.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    
    setImageDimensions(prev => ({
      ...prev,
      [productId]: {
        width: img.naturalWidth,
        height: img.naturalHeight
      }
    }));
  };

  // Function to determine container aspect ratio based on image
  const getContainerAspectRatio = (productId: string) => {
    const dimensions = imageDimensions[productId];
    if (!dimensions) return 'aspect-square'; // Default fallback
    
    const aspectRatio = dimensions.width / dimensions.height;
    
    if (aspectRatio > 1.5) {
      return 'aspect-[4/3]'; // Wide images
    } else if (aspectRatio > 1.2) {
      return 'aspect-[3/2]'; // Slightly wide
    } else if (aspectRatio > 0.8) {
      return 'aspect-square'; // Roughly square
    } else {
      return 'aspect-[3/4]'; // Tall images
    }
  };

  // Function to determine image sizing
  const getImageSizing = (productId: string) => {
    const dimensions = imageDimensions[productId];
    if (!dimensions) return 'object-contain'; // Default fallback
    
    const aspectRatio = dimensions.width / dimensions.height;
    
    if (aspectRatio > 1.3) {
      return 'object-contain'; // Wide images - contain to show full image
    } else {
      return 'object-contain'; // Keep consistent for now
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Accelerate your revenue velocity with our complete suite of B2B sales automation solutions
            </p>
          </div>
          
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600">Loading our amazing products...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || products.length === 0) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Accelerate your revenue velocity with our complete suite of B2B sales automation solutions
            </p>
          </div>
          
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {error ? 'Failed to Load Products' : 'No Products Available'}
            </h3>
            <p className="text-gray-600">
              {error ? 'Please try refreshing the page.' : 'Check back soon for our latest products.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentProduct = products[selectedProduct];
  const containerAspectRatio = currentProduct ? getContainerAspectRatio(currentProduct.id) : 'aspect-square';
  const imageSizing = currentProduct ? getImageSizing(currentProduct.id) : 'object-contain';

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Accelerate your revenue velocity with our complete suite of B2B sales automation solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              layout
              className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-pink-100 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full translate-y-4 -translate-x-4"></div>
              
              {/* Dynamic Product Image Container */}
              <motion.div 
                key={selectedProduct}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                layout
                className={`relative z-10 ${containerAspectRatio} flex items-center justify-center min-h-[300px] max-h-[500px]`}
              >
                {currentProduct?.image ? (
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    fill
                    className={`${imageSizing} w-full h-full transition-all duration-500`}
                    onLoad={(e) => handleImageLoad(currentProduct.id, e)}
                    priority={selectedProduct === 0}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">
                      {currentProduct?.title?.charAt(0) || 'P'}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Product Info Overlay */}
              {currentProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative z-10 mt-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {currentProduct.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {currentProduct.shortDescription}
                    </p>
                    {currentProduct.category && (
                      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {currentProduct.category}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setSelectedProduct(index)}
                onClick={() => handleProductClick(product.id)}
                className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 group h-44 border-2 overflow-hidden ${
                  selectedProduct === index 
                    ? 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-300 shadow-lg scale-105' 
                    : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 hover:border-pink-300 hover:shadow-lg hover:scale-102'
                }`}
              >
                {/* Selection Indicator */}
                {selectedProduct === index && (
                  <motion.div
                    layoutId="productSelector"
                    className="absolute inset-0 border-2 border-pink-500 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

          
                {/* Main Content - Top Aligned */}
                <div className="space-y-2">
                  <h3 className={`text-base font-semibold transition-colors duration-300 leading-tight line-clamp-3 ${
                    selectedProduct === index 
                      ? 'text-gray-900' 
                      : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {product.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed transition-colors duration-300 line-clamp-3 ${
                    selectedProduct === index 
                      ? 'text-gray-700' 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {product.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
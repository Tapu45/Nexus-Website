"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import MarbleBackground from "./Texture";
import { API_ROUTES } from "@/lib/api";

interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  isActive: boolean;
  isFeatured: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch products when dropdown is hovered
  useEffect(() => {
    const fetchProducts = async () => {
      if (showProductDropdown && products.length === 0) {
        setLoadingProducts(true);
        try {
          const response = await fetch(`${API_ROUTES.PRODUCTS.GET_BY_STATUS('published')}`);
          if (response.ok) {
            const data = await response.json();
            const activeProducts = data.filter((p: Product) => p.isActive);
            setProducts(activeProducts);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoadingProducts(false);
        }
      }
    };

    fetchProducts();
  }, [showProductDropdown, products.length]);

  // Hardcoded services
   const services = [
    { name: "Web Applications", href: "/services?service=web-applications" },
    { name: "Mobile Applications", href: "/services?service=mobile-applications" },
    { name: "Dashboard & E-commerce", href: "/services?service=dashboard-ecommerce" },
    { name: "SFA & DMS", href: "/services?service=sfa-dms" },
  ];

  const navItems = [
    { 
      name: "Products", 
      href: "/products",
      hasDropdown: true,
      dropdownType: "products"
    },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownType: "services"
    },
    { name: "About Us", href: "/aboutus" },
    { name: "Career", href: "/career" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const handleContactClick = () => {
    router.push('/contact');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-gray-100' 
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Background overlay for hero banner */}
      {!isScrolled && (
        <div className="absolute inset-0">
          <MarbleBackground />
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Component */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.dropdownType === "products") {
                      setShowProductDropdown(true);
                    } else if (item.dropdownType === "services") {
                      setShowServiceDropdown(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdownType === "products") {
                      setShowProductDropdown(false);
                    } else if (item.dropdownType === "services") {
                      setShowServiceDropdown(false);
                    }
                  }}
                >
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    whileHover={{ y: -2 }}
                    className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-pink-500' 
                        : 'text-black hover:text-pink-500 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          (item.dropdownType === "products" && showProductDropdown) ||
                          (item.dropdownType === "services" && showServiceDropdown)
                            ? 'rotate-180' 
                            : ''
                        }`}
                      />
                    )}
                  </motion.button>

                  {/* Products Dropdown */}
                  <AnimatePresence>
                    {item.dropdownType === "products" && showProductDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                      >
                        {loadingProducts ? (
                          <div className="px-4 py-8 text-center">
                            <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
                            <p className="text-sm text-gray-500 mt-2">Loading products...</p>
                          </div>
                        ) : products.length > 0 ? (
                          <div className="max-h-80 overflow-y-auto">
                            {products.map((product) => (
                              <motion.button
                                key={product.id}
                                onClick={() => handleNavigation(`/products/${product.id}`)} // Changed from slug to id
                                whileHover={{ backgroundColor: "#fdf2f8" }}
                                className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:text-pink-500 border-b border-gray-50 last:border-b-0"
                              >
                                <div className="font-medium">{product.title}</div>
                                {product.category && (
                                  <div className="text-xs text-blue-500 mt-1">{product.category}</div>
                                )}
                              </motion.button>
                            ))}
                          </div>
                        ) : (
                          <div className="px-4 py-8 text-center text-sm text-gray-500">
                            No products available
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {item.dropdownType === "services" && showServiceDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                      >
                        {services.map((service) => (
                          <motion.button
                            key={service.name}
                            onClick={() => handleNavigation(service.href)}
                            whileHover={{ backgroundColor: "#eff6ff" }}
                            className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 border-b border-gray-50 last:border-b-0"
                          >
                            {service.name}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-pink-500' 
                  : 'text-black hover:text-pink-500'
              }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 rounded-b-lg">
              {/* Mobile Products */}
              <div className="space-y-1">
                <button
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                  className="w-full text-left text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
                >
                  Products
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 ${
                      showProductDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {showProductDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1"
                    >
                      {loadingProducts ? (
                        <div className="py-2 text-sm text-gray-500">Loading...</div>
                      ) : products.length > 0 ? (
                        products.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleNavigation(`/products/${product.id}`)} // Changed from slug to id
                            className="block text-gray-600 hover:text-pink-500 px-3 py-1 text-sm transition-colors duration-200 w-full text-left"
                          >
                            {product.title}
                          </button>
                        ))
                      ) : (
                        <div className="py-2 text-sm text-gray-500">No products available</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services */}
              <div className="space-y-1">
                <button
                  onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                  className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
                >
                  Services
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 ${
                      showServiceDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {showServiceDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1"
                    >
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleNavigation(service.href)}
                          className="block text-gray-600 hover:text-blue-600 px-3 py-1 text-sm transition-colors duration-200 w-full text-left"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile About Us */}
              <button
                onClick={() => handleNavigation('/about')}
                className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
              >
                About Us
              </button>

              {/* Mobile Contact Button */}
              <button 
                onClick={handleContactClick}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-200"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
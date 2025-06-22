import AboutUs from "@/components/minicomponents/Aboutus";
import BookDemo from "@/components/minicomponents/BookDemo";
import HeroSection from "@/components/minicomponents/Hero";
import Products from "@/components/minicomponents/Product";
import Services from "@/components/minicomponents/Services";
import Testimonials from "@/components/minicomponents/Testimonials";
import WhyChooseUs from "@/components/minicomponents/WhyChooseus";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
     <Services />
      <Products />
      <Testimonials />
      <WhyChooseUs />
      <BookDemo />
      <Footer />
    </div>
  );
}

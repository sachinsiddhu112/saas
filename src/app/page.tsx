import React from "react";
import Navbar from "@/shared/components/landing/Navbar";
import HeroSection from "@/shared/components/landing/HeroSection";
import ServicesSection from "@/shared/components/landing/ServicesSection";
import BenefitsSection from "@/shared/components/landing/BenefitsSection";
import PricingSection from "@/shared/components/landing/PricingSection";
import Footer from "@/shared/components/landing/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Index = () => {
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen bg-red-900" style={{ backgroundColor: "red" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;

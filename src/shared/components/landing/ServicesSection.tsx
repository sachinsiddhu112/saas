"use client";
import React from "react";
import { Zap, Shield, Users, BarChart3, Globe, Headphones } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security and 99.9% uptime guarantee.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team using our advanced collaboration tools and real-time updates.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Make data-driven decisions with comprehensive analytics and actionable insights.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Scale globally with our worldwide infrastructure and multi-region deployment options.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get help when you need it with our round-the-clock customer support team.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your business. Our
            comprehensive platform provides all the tools for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                <service.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

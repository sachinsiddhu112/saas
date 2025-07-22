"use client";
import React from "react";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Standard templates",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 29,
    description:
      "Ideal for growing teams that need more power and flexibility.",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
      "API access",
      "Advanced integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description:
      "For large organizations with advanced security and compliance needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "White-label solution",
      "Advanced API",
      "SSO integration",
      "Compliance tools",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core
            features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white transform scale-105"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    : "border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

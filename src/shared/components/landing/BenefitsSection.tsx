"use client";
import React from "react";
import {
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description:
      "Boost your team's productivity by up to 40% with our streamlined workflows and automation tools.",
    stat: "40%",
    label: "Productivity Increase",
    graphType: "bar",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Reduce manual work and focus on what matters most. Our platform handles the repetitive tasks for you.",
    stat: "10hrs",
    label: "Saved Per Week",
    graphType: "line",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description:
      "Cut operational costs significantly while improving quality and efficiency across your organization.",
    stat: "30%",
    label: "Cost Reduction",
    graphType: "circular",
  },
];

const AnimatedGraph = ({ type, index }) => {
  if (type === "bar") {
    return (
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-card-foreground">
            Productivity Impact
          </h4>
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>
        <div className="relative h-40">
          <div className="flex items-end justify-center space-x-3 h-full">
            {[
              { label: "Before", value: 45, color: "bg-muted" },
              {
                label: "After",
                value: 85,
                color: "bg-gradient-to-t from-primary to-primary/60",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="relative w-16 h-32 bg-muted/30 rounded-lg overflow-hidden">
                  <div
                    className={`${item.color} rounded-lg transition-all duration-2000 ease-out absolute bottom-0 w-full`}
                    style={{
                      height: `${item.value}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-card-foreground">
                    {item.value}%
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ArrowUpRight className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-card-foreground">
            Time Savings
          </h4>
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
        <div className="relative h-32">
          <svg viewBox="0 0 300 100" className="w-full h-full">
            <path
              d="M 0 80 Q 75 60 150 40 T 300 20"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.6)" />
              </linearGradient>
            </defs>
            {[0, 75, 150, 225, 300].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={80 - i * 15}
                r="4"
                fill="hsl(var(--primary))"
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (type === "circular") {
    return (
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-card-foreground">
            Cost Reduction
          </h4>
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="hsl(var(--muted))"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="hsl(var(--primary))"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40 * 0.75} ${
                  2 * Math.PI * 40
                }`}
                className="animate-pulse"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">75%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Our Platform?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            business with our platform.
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content - alternates order */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-primary">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {benefit.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Graph - alternates order */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <AnimatedGraph type={benefit.graphType} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

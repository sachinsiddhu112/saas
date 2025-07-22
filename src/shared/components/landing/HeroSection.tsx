"use client";
import React from "react";
import { ArrowRight, Play, Star, Zap, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              #1 Business Solution Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Business
              </span>
              <br />
              With Smart Analytics
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlock powerful insights, streamline operations, and accelerate
              growth with our comprehensive business intelligence platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg group">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Animation */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Animated Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Live Analytics
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-sm text-gray-500">Live</div>
                  </div>
                </div>

                {/* Animated Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <div className="text-2xl font-bold text-blue-900">
                          2.4K
                        </div>
                        <div className="text-sm text-blue-600">
                          Users Online
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <div className="text-2xl font-bold text-green-900">
                          98%
                        </div>
                        <div className="text-sm text-green-600">
                          Performance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-end space-x-2 h-20">
                    {[40, 70, 45, 80, 60, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1 animate-pulse"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="flex items-center justify-around text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-green-500" />
                    Secure
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                    Fast
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-blue-500" />
                    Scalable
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

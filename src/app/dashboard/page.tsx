"use client";
import React from "react";
import SummaryCard from "@/shared/components/common/SummaryCard";
import CostChart from "@/shared/components/home/CostChart";
import RecentActivities from "@/shared/components/home/RecentActivities";
import NotificationsPanel from "@/shared/components/home/NotificationPanel";
import { Users, DollarSign, FileText, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Users"
          value="12,543"
          change="12%"
          changeType="increase"
          icon={Users}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
          image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&crop=face"
        />
        <SummaryCard
          title="Revenue"
          value="$24,780"
          change="8%"
          changeType="increase"
          icon={DollarSign}
          color="bg-gradient-to-r from-green-500 to-green-600"
          image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop"
        />
        <SummaryCard
          title="Total Posts"
          value="1,247"
          change="23%"
          changeType="increase"
          icon={FileText}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
          image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop"
        />
        <SummaryCard
          title="Growth Rate"
          value="18.5%"
          change="3%"
          changeType="decrease"
          icon={TrendingUp}
          color="bg-gradient-to-r from-orange-500 to-orange-600"
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
        />
      </div>

      {/* Chart */}
      <div className="mb-8">
        <CostChart />
      </div>

      {/* Activities and Notifications in single row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />
        <NotificationsPanel />
      </div>
    </div>
  );
};

export default Dashboard;

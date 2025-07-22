"use client";
import React from "react";
import { Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "New user registered",
    time: "2 minutes ago",
    type: "user",
  },
  {
    id: 2,
    title: "Payment processed",
    time: "5 minutes ago",
    type: "payment",
  },
  {
    id: 3,
    title: "Report generated",
    time: "10 minutes ago",
    type: "report",
  },
  {
    id: 4,
    title: "System backup completed",
    time: "1 hour ago",
    type: "system",
  },
  {
    id: 5,
    title: "New feature deployed",
    time: "2 hours ago",
    type: "feature",
  },
  {
    id: 6,
    title: "User feedback received",
    time: "3 hours ago",
    type: "feedback",
  },
  {
    id: 7,
    title: "Security scan completed",
    time: "4 hours ago",
    type: "security",
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
          <Clock className="h-4 w-4 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;

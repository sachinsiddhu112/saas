"use client";
import React from "react";
import {
  Clock,
  User,
  FileText,
  Settings,
  Bell,
  BarChart3,
  Trash2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "post",
    title: "New blog post published",
    description: "Marketing automation guide",
    time: "2 hours ago",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    type: "user",
    title: "New user registered",
    description: "john.doe@example.com",
    time: "4 hours ago",
    icon: User,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    type: "settings",
    title: "Settings updated",
    description: "Payment method changed",
    time: "6 hours ago",
    icon: Settings,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    type: "analytics",
    title: "Monthly report generated",
    description: "Performance analytics ready",
    time: "8 hours ago",
    icon: BarChart3,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: 5,
    type: "notification",
    title: "System maintenance",
    description: "Scheduled for tonight",
    time: "12 hours ago",
    icon: Bell,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 6,
    type: "delete",
    title: "Content deleted",
    description: "Draft post removed",
    time: "1 day ago",
    icon: Trash2,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: 7,
    type: "user",
    title: "User subscription upgraded",
    description: "Premium plan activated",
    time: "2 days ago",
    icon: User,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const ActivityCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.slice(0, 7).map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${activity.bgColor}`}
            >
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {activity.description}
              </p>
              <div className="flex items-center mt-1">
                <Clock className="h-3 w-3 text-gray-400 mr-1" />
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;

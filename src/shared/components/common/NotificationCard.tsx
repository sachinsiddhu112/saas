"use client";
import React from "react";
import { Bell, AlertCircle, CheckCircle, Info, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Payment successful",
    message: "Your monthly subscription has been renewed",
    time: "5 min ago",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    type: "warning",
    title: "Storage limit reached",
    message: "You have used 95% of your storage quota",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    id: 3,
    type: "info",
    title: "New feature available",
    message: "Advanced analytics dashboard is now live",
    time: "3 hours ago",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    type: "info",
    title: "Scheduled maintenance",
    message: "System will be down for 30 minutes tonight",
    time: "6 hours ago",
    icon: Bell,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
  },
  {
    id: 5,
    type: "success",
    title: "Backup completed",
    message: "All your data has been safely backed up",
    time: "1 day ago",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
];

const NotificationCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Mark all read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${notification.bgColor} ${notification.borderColor} relative group`}
          >
            <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>

            <div className="flex items-start space-x-3">
              <notification.icon
                className={`h-5 w-5 ${notification.color} flex-shrink-0 mt-0.5`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {notification.message}
                </p>
                <span className="text-xs text-gray-400">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;

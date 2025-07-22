"use client";
import React from "react";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Server maintenance scheduled",
    time: "1 hour ago",
    priority: "high",
    type: "maintenance",
  },
  {
    id: 2,
    title: "New team member added",
    time: "2 hours ago",
    priority: "medium",
    type: "team",
  },
  {
    id: 3,
    title: "Monthly report ready",
    time: "3 hours ago",
    priority: "low",
    type: "report",
  },
  {
    id: 4,
    title: "Payment method updated",
    time: "5 hours ago",
    priority: "medium",
    type: "payment",
  },
  {
    id: 5,
    title: "Security alert resolved",
    time: "6 hours ago",
    priority: "high",
    type: "security",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500";
    case "medium":
      return "bg-gray-800";
    case "low":
      return "bg-gray-400";
    default:
      return "bg-gray-400";
  }
};

const NotificationsPanel = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
          <Bell className="h-4 w-4 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3">
            <div
              className={`w-2 h-2 ${getPriorityColor(
                notification.priority
              )} rounded-full mt-2 flex-shrink-0`}
            ></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`px-2 py-1 text-xs rounded-full text-white ${getPriorityColor(
                    notification.priority
                  )}`}
                >
                  {notification.priority}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;

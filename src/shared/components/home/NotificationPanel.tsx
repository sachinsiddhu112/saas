"use client";
import React from "react";
import { Bell } from "lucide-react";
import { notifications } from "@/shared/utils/mockData";
import { getPriorityColor, getTypeColor } from "@/shared/utils/utilFunctions";

const NotificationsPanel = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
          <Bell className="h-4 w-4 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      </div>

      <div className="space-y-4 h-96 overflow-y-auto custom-scroll">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-3 shadow-md rounded-md p-4 hover:bg-gray-100 transition-colors"
          >
            <div
              className={`w-2 h-2 ${getPriorityColor(
                notification.priority,
                notification.status
              )} rounded-full mt-2 flex-shrink-0`}
            ></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`px-2 py-1 text-xs rounded-full text-white ${getPriorityColor(
                    notification.priority,
                    notification.status
                  )}`}
                >
                  {notification.priority.charAt(0).toUpperCase() +
                    notification.priority.slice(1)}
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium text-gray-700 bg-gray-200 ${getTypeColor(
                    notification.type
                  )}`}
                >
                  {notification.type.charAt(0).toUpperCase() +
                    notification.type.slice(1)}
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

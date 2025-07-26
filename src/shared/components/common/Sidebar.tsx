"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { getSecondSegment } from "@/shared/utils/utilFunctions";
import {
  LayoutDashboard,
  FileText,
  Settings,
  User,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "New Post",
    href: "/dashboard/create-post/new",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = React.useRef<string>("");
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Doma
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive =
            activeTab.current === getSecondSegment(item.href) ||
            pathname === item.href;
          return (
            <a
              key={item.name}
              onClick={() => {
                const tab = getSecondSegment(item.href);
                activeTab.current = tab;
                router.push(item.href);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200  cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              />
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-all duration-200">
          <LogOut className="mr-3 h-5 w-5 text-gray-400" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

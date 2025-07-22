import React from "react";
import Sidebar from "@/shared/components/common/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

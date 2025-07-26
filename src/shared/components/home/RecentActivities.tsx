"use client";
import React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { upcomings } from "@/shared/utils/mockData";

const Recentupcomings = () => {
  const router = useRouter();
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
          <Clock className="h-4 w-4 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Posts</h3>
      </div>

      <div className="space-y-4 h-96 overflow-y-auto custom-scroll">
        {upcomings.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 border border-gray-200 rounded-md p-4 hover:bg-gray-100 transition-colors"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
              </p>

              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Button
              className="cursor-pointer text-gray-500 text-xs font-normal py-2 px-4"
              variant={"outline"}
              onClick={() => {
                router.push(`/dashboard/create-post/${activity.id}`);
              }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentupcomings;

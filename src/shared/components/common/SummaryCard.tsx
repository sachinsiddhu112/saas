"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
  color: string;
  image?: string;
}

const SummaryCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
  image,
}: SummaryCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
      {image && (
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-bl-3xl"
          />
        </div>
      )}
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p
            className={`text-sm font-medium mt-2 ${
              changeType === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {changeType === "increase" ? "+" : "-"}
            {change} from last month
          </p>
        </div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", scenario1: 1200, scenario2: 1800 },
  { month: "Feb", scenario1: 1100, scenario2: 1600 },
  { month: "Mar", scenario1: 1300, scenario2: 1900 },
  { month: "Apr", scenario1: 1000, scenario2: 1500 },
  { month: "May", scenario1: 1400, scenario2: 2000 },
  { month: "Jun", scenario1: 1250, scenario2: 1750 },
];

const CostChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Cost Comparison
        </h3>
        <p className="text-sm text-gray-600">
          Monthly cost analysis for two scenarios
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              formatter={(value) => [`$${value}`, ""]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="scenario1"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Scenario 1"
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="scenario2"
              stroke="#8b5cf6"
              strokeWidth={3}
              name="Scenario 2"
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CostChart;

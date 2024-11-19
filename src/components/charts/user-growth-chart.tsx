import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";

// Import the updated mock data
import { userGrowthData } from "@/constants/mock-data";

// Define TypeScript types for chart data
interface UserGrowthData {
  month: string;
  totalUsers: number;
  activeUsers: number;
  year: string; // Include the year property for filtering
}

const UserGrowthChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Memoize filtered data to avoid recalculating on each render
  const chartData = useMemo<UserGrowthData[]>(() => {
    return userGrowthData.filter((data) => data.year === selectedYear);
  }, [selectedYear]);

  // Display a fallback message when there's no data for the selected year
  const renderChart = chartData.length > 0 ? (
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
      <XAxis dataKey="month" stroke="#9CA3AF" />
      <YAxis stroke="#9CA3AF" />
      <Tooltip
        contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
        itemStyle={{ color: "#E5E7EB" }}
      />
      <Line
        type="monotone"
        dataKey="totalUsers"
        stroke="#34D399"
        fill="none"
        strokeWidth={3}
        name="Total Users"
      />
      <Line
        type="monotone"
        dataKey="activeUsers"
        stroke="#60A5FA"
        fill="none"
        strokeWidth={3}
        name="Active Users"
      />
    </LineChart>
  ) : (
    <p className="text-center dark:text-gray-400 text-gray-600">
      No data available for the selected year.
    </p>
  );

  return (
    <div className="dark:bg-gray-800 bg-white dark:bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold dark:text-gray-100 text-black">User Growth Overview</h2>

        {/* Year Selector */}
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          aria-label="Select Year"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer>{renderChart}</ResponsiveContainer>
      </div>
    </div>
  );
};

export default React.memo(UserGrowthChart);

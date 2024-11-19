import React, { useState, useMemo, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { TOP_SONGS_DATA } from "@/constants/mock-data";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const TopStreamedSongsChart = () => {
  const [selectedYear, setSelectedYear] = useState<keyof typeof TOP_SONGS_DATA>("2023");
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof TOP_SONGS_DATA["2023"]>("January");

  // Memoize the data to avoid recomputing on every render
  const data = useMemo(() => {
    return TOP_SONGS_DATA[selectedYear]?.[selectedMonth] || [];
  }, [selectedYear, selectedMonth]);

  // Memoize handlers to avoid re-creation on every render
  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(e.target.value as keyof typeof TOP_SONGS_DATA);
    },
    []
  );

  const handleMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMonth(e.target.value as keyof typeof TOP_SONGS_DATA["2023"]);
    },
    []
  );


  return (
    <div className="dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700">
      <h2 className="text-lg font-medium mb-4 dark:text-white text-gray-800">
        Top 5 Streamed Songs
      </h2>

      {/* Year and Month Selectors */}
      <div className="flex space-x-4 mb-4">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800 rounded-lg"
          aria-label="Select Year"
        >
          {Object.keys(TOP_SONGS_DATA).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800 rounded-lg"
          aria-label="Select Month"
        >
          {Object.keys(TOP_SONGS_DATA[selectedYear] || {}).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Chart */}
      {data.length > 0 ? (
        <div className="h-80">
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend />
              <Bar dataKey="streams" fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center dark:text-gray-400 text-gray-600">
          No data available for the selected year and month.
        </p>
      )}
    </div>
  );
};

export default React.memo(TopStreamedSongsChart);

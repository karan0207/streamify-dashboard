"use client";

import React, { useState, useEffect } from "react";
import { Card, MOCK_CARDSDATA, MONTHS } from "@/constants/mock-data";
// import StatsCards from "@/components/dashboard/StatCards";
// import Filters from "@/components/dashboard/Filters";
import UserGrowthChart from "@/components/charts/user-growth-chart";
import RevenueDistributionChart from "@/components/charts/revenue-distribution-chart";
import TopStreamedSongsChart from "@/components/charts/most-streamed-songs-chart";
import DataTable from "@/components/table/data-table";
import StatsCards from "@/components/global/stats-cards";
import Filters from "@/components/filters/filter-card-data";
// import LoadingSpinner from "@/components/global/loading-spinner";

const Page = () => {
  const YEARS = Object.keys(MOCK_CARDSDATA);

  const [month, setMonth] = useState<string>("January"); // Default month
  const [year, setYear] = useState<string>("2024"); // Default year
  const [filteredCardsData, setFilteredCardsData] = useState<Card[]>([]);

  // Filter data based on selected month and year
  useEffect(() => {
    const dataForYear = MOCK_CARDSDATA[year]; // Access the data for the selected year
    const dataForMonth = dataForYear?.[month] || []; // Access the data for the selected month
    setFilteredCardsData(dataForMonth);
  }, [month, year]);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Filters */}
        <Filters
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          months={MONTHS}
          years={YEARS}
        />

        {/* Stats Cards */}
        <StatsCards cards={filteredCardsData} />

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserGrowthChart />
          <RevenueDistributionChart />
          <TopStreamedSongsChart />
          <DataTable />
        </div>
      </main>
    </div>
  );
};

export default Page;

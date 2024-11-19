import React from "react";
// import StatCard from "@/components/global/stats-card";
import { Card } from "@/constants/mock-data";
import StatCard from "./stat-card";

interface StatsCardsProps {
  cards: Card[];
}

const StatsCards: React.FC<StatsCardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-8 sm:mt-6">
      {cards.length > 0 ? (
        cards.map((card) => (
          <StatCard
            key={card.name}
            name={card.name}
            icon={card.icon}
            value={card.value}
            color={card.color}
          />
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-5">
          No data available for the selected filters.
        </div>
      )}
    </div>
  );
};

export default StatsCards;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { BarChart2, DollarSign, LucideIcon, Users, Zap } from "lucide-react";
interface SongData {
  name: string;
  streams: number;
}

interface YearlyData {
  [month: string]: SongData[];
}

interface SongStats {
  [year: string]: YearlyData;
}

export type Stream = {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
};


export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Streams for recent days
export const InitialStreams:Stream[] = [
  { songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2024-11-16", streamCount: 125000, userId: "USER1234" },
  { songName: "Levitating", artist: "Dua Lipa", dateStreamed: "2024-11-15", streamCount: 110000, userId: "USER5678" },
  { songName: "Good 4 U", artist: "Olivia Rodrigo", dateStreamed: "2024-11-14", streamCount: 105000, userId: "USER9101" },
  { songName: "Stay", artist: "Justin Bieber", dateStreamed: "2024-11-13", streamCount: 102500, userId: "USER1123" },
  { songName: "Bad Habit", artist: "Steve Lacy", dateStreamed: "2024-11-12", streamCount: 98000, userId: "USER1415" },
  { songName: "Watermelon Sugar", artist: "Harry Styles", dateStreamed: "2024-11-11", streamCount: 87000, userId: "USER1820" },
  { songName: "Shape of You", artist: "Ed Sheeran", dateStreamed: "2024-11-10", streamCount: 140000, userId: "USER5679" },
  { songName: "As It Was", artist: "Harry Styles", dateStreamed: "2024-11-09", streamCount: 135000, userId: "USER1245" },
  { songName: "Save Your Tears", artist: "The Weeknd", dateStreamed: "2024-11-08", streamCount: 95000, userId: "USER3421" },
  { songName: "Peaches", artist: "Justin Bieber", dateStreamed: "2024-11-07", streamCount: 85000, userId: "USER7845" },
  { songName: "Circles", artist: "Post Malone", dateStreamed: "2024-11-06", streamCount: 89000, userId: "USER5432" },
  { songName: "Drivers License", artist: "Olivia Rodrigo", dateStreamed: "2024-11-05", streamCount: 120000, userId: "USER9912" },
  { songName: "Happier Than Ever", artist: "Billie Eilish", dateStreamed: "2024-11-04", streamCount: 88000, userId: "USER6677" },
  { songName: "Easy on Me", artist: "Adele", dateStreamed: "2024-11-03", streamCount: 132000, userId: "USER3321" },
  { songName: "Shallow", artist: "Lady Gaga & Bradley Cooper", dateStreamed: "2024-11-02", streamCount: 77000, userId: "USER1238" },
  { songName: "Thank U, Next", artist: "Ariana Grande", dateStreamed: "2024-11-01", streamCount: 96000, userId: "USER2114" },
  { songName: "Someone You Loved", artist: "Lewis Capaldi", dateStreamed: "2024-10-31", streamCount: 118000, userId: "USER9987" },
  { songName: "Sunflower", artist: "Post Malone & Swae Lee", dateStreamed: "2024-10-30", streamCount: 94000, userId: "USER8888" },
  { songName: "Industry Baby", artist: "Lil Nas X & Jack Harlow", dateStreamed: "2024-10-29", streamCount: 101000, userId: "USER1212" },
  { songName: "Old Town Road", artist: "Lil Nas X", dateStreamed: "2024-10-28", streamCount: 97000, userId: "USER4545" },
];


// Top songs by total streams
// export const TOP_SONGS_DATA = [
//   { name: "Blinding Lights", streams: 350000 },
//   { name: "Levitating", streams: 230000 },
//   { name: "Good 4 U", streams: 210000 },
//   { name: "Stay", streams: 220000 },
//   { name: "Bad Habit", streams: 180000 },
  
// ];

export const TOP_SONGS_DATA:SongStats = {
  2023: {
    January: [
      { name: "Blinding Lights", streams: 350000 },
      { name: "Levitating", streams: 220000 },
      { name: "Good 4 U", streams: 210000 },
      { name: "Stay", streams: 190000 },
      { name: "Bad Habit", streams: 180000 },
    ],
    February: [
      { name: "Save Your Tears", streams: 340000 },
      { name: "Watermelon Sugar", streams: 230000 },
      { name: "Industry Baby", streams: 200000 },
      { name: "Kiss Me More", streams: 185000 },
      { name: "Montero", streams: 175000 },
    ],
    March: [
      { name: "Take My Breath", streams: 355000 },
      { name: "Levitating", streams: 240000 },
      { name: "Good 4 U", streams: 215000 },
      { name: "Stay", streams: 200000 },
      { name: "Bad Habit", streams: 195000 },
    ],
    April: [
      { name: "As It Was", streams: 365000 },
      { name: "Peaches", streams: 250000 },
      { name: "Bad Habit", streams: 220000 },
      { name: "Save Your Tears", streams: 210000 },
      { name: "Blinding Lights", streams: 205000 },
    ],
    May: [
      { name: "Levitating", streams: 375000 },
      { name: "Good 4 U", streams: 260000 },
      { name: "Stay", streams: 230000 },
      { name: "Industry Baby", streams: 220000 },
      { name: "Montero", streams: 210000 },
    ],
    June: [
      { name: "Butter", streams: 385000 },
      { name: "Levitating", streams: 270000 },
      { name: "Good 4 U", streams: 240000 },
      { name: "Stay", streams: 225000 },
      { name: "Blinding Lights", streams: 220000 },
    ],
    July: [
      { name: "Heat Waves", streams: 395000 },
      { name: "Levitating", streams: 280000 },
      { name: "Good 4 U", streams: 250000 },
      { name: "Stay", streams: 230000 },
      { name: "Bad Habit", streams: 225000 },
    ],
    August: [
      { name: "Shivers", streams: 400000 },
      { name: "Stay", streams: 290000 },
      { name: "Good 4 U", streams: 270000 },
      { name: "Levitating", streams: 260000 },
      { name: "Save Your Tears", streams: 255000 },
    ],
    September: [
      { name: "Take My Breath", streams: 410000 },
      { name: "Levitating", streams: 300000 },
      { name: "Industry Baby", streams: 280000 },
      { name: "Stay", streams: 270000 },
      { name: "Good 4 U", streams: 260000 },
    ],
    October: [
      { name: "Peaches", streams: 420000 },
      { name: "Levitating", streams: 310000 },
      { name: "Good 4 U", streams: 290000 },
      { name: "Stay", streams: 280000 },
      { name: "Montero", streams: 275000 },
    ],
    November: [
      { name: "Blinding Lights", streams: 430000 },
      { name: "Levitating", streams: 320000 },
      { name: "Good 4 U", streams: 300000 },
      { name: "Stay", streams: 290000 },
      { name: "Bad Habit", streams: 285000 },
    ],
    December: [
      { name: "Kiss Me More", streams: 440000 },
      { name: "Levitating", streams: 330000 },
      { name: "Industry Baby", streams: 310000 },
      { name: "Stay", streams: 300000 },
      { name: "Good 4 U", streams: 295000 },
    ],
  },

  2024: {
    January: [
      { name: "Blinding Lights", streams: 450000 },
      { name: "Levitating", streams: 340000 },
      { name: "Good 4 U", streams: 310000 },
      { name: "Stay", streams: 305000 },
      { name: "Bad Habit", streams: 295000 },
    ],
    February: [
      { name: "Shivers", streams: 460000 },
      { name: "Levitating", streams: 350000 },
      { name: "Good 4 U", streams: 320000 },
      { name: "Heat Waves", streams: 315000 },
      { name: "Industry Baby", streams: 300000 },
    ],
    March: [
      { name: "Save Your Tears", streams: 470000 },
      { name: "Levitating", streams: 360000 },
      { name: "Good 4 U", streams: 330000 },
      { name: "Stay", streams: 320000 },
      { name: "Montero", streams: 310000 },
    ],
    April: [
      { name: "Blinding Lights", streams: 480000 },
      { name: "Levitating", streams: 370000 },
      { name: "Industry Baby", streams: 340000 },
      { name: "Good 4 U", streams: 335000 },
      { name: "Bad Habit", streams: 330000 },
    ],
    May: [
      { name: "Peaches", streams: 490000 },
      { name: "Levitating", streams: 380000 },
      { name: "Good 4 U", streams: 350000 },
      { name: "Stay", streams: 340000 },
      { name: "Kiss Me More", streams: 330000 },
    ],
    June: [
      { name: "Butter", streams: 500000 },
      { name: "Levitating", streams: 390000 },
      { name: "Good 4 U", streams: 360000 },
      { name: "Stay", streams: 350000 },
      { name: "Blinding Lights", streams: 340000 },
    ],
    July: [
      { name: "Heat Waves", streams: 510000 },
      { name: "Levitating", streams: 400000 },
      { name: "Good 4 U", streams: 370000 },
      { name: "Stay", streams: 360000 },
      { name: "Bad Habit", streams: 350000 },
    ],
    August: [
      { name: "Shivers", streams: 520000 },
      { name: "Levitating", streams: 410000 },
      { name: "Good 4 U", streams: 380000 },
      { name: "Stay", streams: 370000 },
      { name: "Blinding Lights", streams: 360000 },
    ],
    September: [
      { name: "Take My Breath", streams: 530000 },
      { name: "Levitating", streams: 420000 },
      { name: "Good 4 U", streams: 390000 },
      { name: "Stay", streams: 380000 },
      { name: "Industry Baby", streams: 370000 },
    ],
    October: [
      { name: "Peaches", streams: 540000 },
      { name: "Levitating", streams: 430000 },
      { name: "Good 4 U", streams: 400000 },
      { name: "Stay", streams: 390000 },
      { name: "Bad Habit", streams: 380000 },
    ],
    November: [
      { name: "Blinding Lights", streams: 550000 },
      { name: "Levitating", streams: 440000 },
      { name: "Good 4 U", streams: 410000 },
      { name: "Stay", streams: 400000 },
      { name: "Montero", streams: 390000 },
    ],
    December: [
      { name: "Kiss Me More", streams: 560000 },
      { name: "Levitating", streams: 450000 },
      { name: "Good 4 U", streams: 420000 },
      { name: "Stay", streams: 410000 },
      { name: "Industry Baby", streams: 400000 },
    ],
  },
};


// Revenue by source
export const revenueData = [
  { name: "Subscriptions", value: 85000 },
  { name: "Ads", value: 45000 },
  { name: "Merchandise", value: 22000 },
  { name: "Partnerships", value: 12000 },
];

// User growth (Total users and active users by month)
// export const userGrowthData = [
//   // Weekly data for January
//   { week: "Week 1", month: "Jan", quarter: "Q1", year: 2024, totalUsers: 148000, activeUsers: 74000 },
//   { week: "Week 2", month: "Jan", quarter: "Q1", year: 2024, totalUsers: 150000, activeUsers: 75000 },
//   { week: "Week 3", month: "Jan", quarter: "Q1", year: 2024, totalUsers: 153000, activeUsers: 76000 },
//   { week: "Week 4", month: "Jan", quarter: "Q1", year: 2024, totalUsers: 155000, activeUsers: 77000 },

//   // Weekly data for February
//   { week: "Week 5", month: "Feb", quarter: "Q1", year: 2024, totalUsers: 158000, activeUsers: 81000 },
//   { week: "Week 6", month: "Feb", quarter: "Q1", year: 2024, totalUsers: 160000, activeUsers: 82000 },
//   { week: "Week 7", month: "Feb", quarter: "Q1", year: 2024, totalUsers: 163000, activeUsers: 83000 },
//   { week: "Week 8", month: "Feb", quarter: "Q1", year: 2024, totalUsers: 165000, activeUsers: 85000 },

//   // Monthly data
//   { month: "Mar", quarter: "Q1", year: 2024, totalUsers: 170000, activeUsers: 90000 },
//   { month: "Apr", quarter: "Q2", year: 2024, totalUsers: 200000, activeUsers: 110000 },
//   { month: "May", quarter: "Q2", year: 2024, totalUsers: 250000, activeUsers: 135000 },

//   // Quarterly data
//   { quarter: "Q1", year: 2024, totalUsers: 180000, activeUsers: 95000 },
//   { quarter: "Q2", year: 2024, totalUsers: 230000, activeUsers: 125000 },

//   // Yearly data
//   { year: 2024, totalUsers: 340000, activeUsers: 180000 },
// ];


// mock-data.ts

// Monthly data for each month in 2023 and 2024
export const userGrowthData = [
  { year: "2023", month: "Jan", totalUsers: 120000, activeUsers: 60000 },
  { year: "2023", month: "Feb", totalUsers: 125000, activeUsers: 62000 },
  { year: "2023", month: "Mar", totalUsers: 130000, activeUsers: 64000 },
  { year: "2023", month: "Apr", totalUsers: 135000, activeUsers: 65000 },
  { year: "2023", month: "May", totalUsers: 140000, activeUsers: 67000 },
  { year: "2023", month: "Jun", totalUsers: 145000, activeUsers: 69000 },
  { year: "2023", month: "Jul", totalUsers: 150000, activeUsers: 71000 },
  { year: "2023", month: "Aug", totalUsers: 155000, activeUsers: 73000 },
  { year: "2023", month: "Sep", totalUsers: 160000, activeUsers: 75000 },
  { year: "2023", month: "Oct", totalUsers: 165000, activeUsers: 77000 },
  { year: "2023", month: "Nov", totalUsers: 170000, activeUsers: 79000 },
  { year: "2023", month: "Dec", totalUsers: 175000, activeUsers: 81000 },

  { year: "2024", month: "Jan", totalUsers: 180000, activeUsers: 90000 },
  { year: "2024", month: "Feb", totalUsers: 185000, activeUsers: 92000 },
  { year: "2024", month: "Mar", totalUsers: 190000, activeUsers: 94000 },
  { year: "2024", month: "Apr", totalUsers: 195000, activeUsers: 96000 },
  { year: "2024", month: "May", totalUsers: 200000, activeUsers: 98000 },
  { year: "2024", month: "Jun", totalUsers: 210000, activeUsers: 100000 },
  { year: "2024", month: "Jul", totalUsers: 220000, activeUsers: 105000 },
  { year: "2024", month: "Aug", totalUsers: 230000, activeUsers: 110000 },
  { year: "2024", month: "Sep", totalUsers: 240000, activeUsers: 115000 },
  { year: "2024", month: "Oct", totalUsers: 250000, activeUsers: 120000 },
  { year: "2024", month: "Nov", totalUsers: 260000, activeUsers: 125000 },
  { year: "2024", month: "Dec", totalUsers: 270000, activeUsers: 130000 },
];


// Card data for key statistics
// export interface CardData {
//   name: string;
//   value: string;
//   icon: LucideIcon;
//   color: string;
// }

// export const CARDSDATA: CardData[] = [
//   { name: 'Total Users', value: '320,000', icon: Users, color: '#6366F1' },
//   { name: 'Active Users', value: '170,000', icon: Users, color: '#8B5CF6' },
//   { name: 'Total Streams', value: '2.5 Billion', icon: Zap, color: '#EC4899' },
//   { name: 'Top Artist', value: 'The Weeknd', icon: BarChart2, color: '#10B981' },
//   { name: 'Revenue', value: '$205,000', icon: DollarSign, color: '#F59E0B' },
// ];

export const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EC4899"];



// mock-data.ts
// import { LucideIcon, Users, Zap, BarChart2, DollarSign } from "lucide-react";

// export interface CardData {
//   name: string;
//   value: string;
//   icon: LucideIcon;
//   color: string;
//   month: string;
//   year: string;
// }

// import { LucideIcon, Users, Zap, BarChart2, DollarSign } from "lucide-react";

// export interface CardData {
//   name: string;
//   value: string;
//   icon: LucideIcon;
//   color: string;
// }

// export interface YearlyData {
//   [month: string]: CardData[]; // Each month will have an array of CardData
// }

// export interface MockData {
//   [year: string]: YearlyData; // Data is structured by year, and each year contains months
// }


// CardData interface for each card component
 export interface Card {
  name: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

// YearlyData interface that stores data for each month as an array of CardData

// MockData interface that organizes yearly data, with years as keys and YearlyData as values

export interface CardsData {
  [year: string]: {
    [month: string]: Card[];
  };
}

export const MOCK_CARDSDATA:CardsData = {
  "2023": {
    January: [
      { name: "Total Users", value: "300,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "160,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.2 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Taylor Swift", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$180,000", icon: DollarSign, color: "#F59E0B" },
    ],
    February: [
      { name: "Total Users", value: "310,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "170,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.4 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Post Malone", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$190,000", icon: DollarSign, color: "#F59E0B" },
    ],
    March: [
      { name: "Total Users", value: "320,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "180,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.5 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Drake", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$200,000", icon: DollarSign, color: "#F59E0B" },
    ],
    April: [
      { name: "Total Users", value: "330,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "185,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.6 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Beyoncé", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$210,000", icon: DollarSign, color: "#F59E0B" },
    ],
    May: [
      { name: "Total Users", value: "340,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "190,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.7 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Kendrick Lamar", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$220,000", icon: DollarSign, color: "#F59E0B" },
    ],
    June: [
      { name: "Total Users", value: "350,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "200,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.8 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Billie Eilish", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$230,000", icon: DollarSign, color: "#F59E0B" },
    ],
    July: [
      { name: "Total Users", value: "360,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "210,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.9 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Ariana Grande", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$240,000", icon: DollarSign, color: "#F59E0B" },
    ],
    August: [
      { name: "Total Users", value: "370,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "220,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "3.0 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Harry Styles", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$250,000", icon: DollarSign, color: "#F59E0B" },
    ],
    September: [
      { name: "Total Users", value: "380,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "230,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "3.1 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Ed Sheeran", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$260,000", icon: DollarSign, color: "#F59E0B" },
    ],
    October: [
      { name: "Total Users", value: "390,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "240,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "3.2 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Lil Nas X", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$270,000", icon: DollarSign, color: "#F59E0B" },
    ],
    November: [
      { name: "Total Users", value: "400,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "250,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "3.3 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Drake", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$280,000", icon: DollarSign, color: "#F59E0B" },
    ],
    December: [
      { name: "Total Users", value: "410,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "260,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "3.4 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "The Weeknd", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$300,000", icon: DollarSign, color: "#F59E0B" },
    ],
  },

  "2024": {
    January: [
      { name: "Total Users", value: "320,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "170,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.5 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "The Weeknd", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$205,000", icon: DollarSign, color: "#F59E0B" },
    ],
    February: [
      { name: "Total Users", value: "310,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "160,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.4 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Drake", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$200,000", icon: DollarSign, color: "#F59E0B" },
    ],
    March: [
      { name: "Total Users", value: "330,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "180,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.6 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Adele", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$210,000", icon: DollarSign, color: "#F59E0B" },
    ],
    April: [
      { name: "Total Users", value: "340,000", icon: Users, color: "#6366F1" },
      { name: "Active Users", value: "190,000", icon: Users, color: "#8B5CF6" },
      { name: "Total Streams", value: "2.7 Billion", icon: Zap, color: "#EC4899" },
      { name: "Top Artist", value: "Beyoncé", icon: BarChart2, color: "#10B981" },
      { name: "Revenue", value: "$220,000", icon: DollarSign, color: "#F59E0B" },
    ],
    // Add data for remaining months (May to December)
  },
};

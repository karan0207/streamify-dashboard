# 🎵 Music Streaming Analytics Dashboard

A feature-rich and responsive **Music Streaming Analytics Dashboard** built using **Next.js** and **React**, designed to provide insightful analytics for a music streaming platform.

---

## 📚 Libraries & Tools Used

- **Charts**: [Recharts](https://recharts.org/)  
- **UI Components**: [Shadcn](https://ui.shadcn.dev/) and [Radix UI](https://www.radix-ui.com/)  
- **Icons**: [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)  
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## 🗂️ Folder Structure

```plaintext
src/
├── app/
│   ├── layout.tsx          # Main layout of the app
│   ├── page.tsx            # Entry page of the dashboard
│
├── components/
│   ├── global/             # Components used across the app
│   ├── charts/             # Chart components (e.g., line, pie, bar)
│   ├── filters/            # Filter-related components (e.g., month/year selector)
│   ├── table/              # Table-related components
│   ├── ui/                 # UI components from Shadcn
│
├── constants/              # Mock data and other constants



🎨 Features
1. Dashboard Navigation
A responsive sidebar for navigating between dashboard components.
Fully functional across devices, from mobile to desktop.
2. Filter Selector
Month and year filters to dynamically display data across the dashboard.
Filters affect the stat cards (e.g., total users, revenue, top artist).
3. Stat Cards
Reusable stat card component displaying:
Total Users
Active Users
Total Streams
Top Artist
Revenue
Grid-based layout ensures adaptability and responsiveness.
4. User Growth Chart
A line chart showing the number of users per month for the selected year.
Built with Recharts for seamless interactivity and visualization.
5. Revenue Distribution Chart
A pie chart visualizing revenue sources:
Subscription
Ads
Partnerships
Merchandise
Data sourced from mock JSON in constants/.
6. Most Streamed Songs Chart
A bar chart showcasing the top 5 songs by stream count.
Dynamically updates based on selected year and month.
7. Recent Streams Table
A paginated and filterable table displaying:
Song Name
Artist
Date
Stream Count
User ID
Options to filter data by song name and artist name.
8. Optimized Performance
Memoization and callbacks (via useMemo and useCallback) to minimize unnecessary renders and computations.
🚀 Getting Started
Follow these steps to set up the project locally:

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-repo/music-streaming-dashboard.git
cd music-streaming-dashboard
2. Install Dependencies
bash
Copy code
npm install
3. Run the Development Server
bash
Copy code
npm run dev
4. View in Browser
Open http://localhost:3000 to see the dashboard.
```
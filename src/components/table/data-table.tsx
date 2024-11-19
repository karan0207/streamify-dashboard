
import { InitialStreams, Stream } from "@/constants/mock-data";
import React, { useState } from "react";

const DataTable = () => {
  const [streams, setStreams] = useState<Stream[]>(InitialStreams);
  const [filter, setFilter] = useState({ songName: "", artist: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(streams.length / itemsPerPage);

  // Handle Filtering
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));

    const filteredData = InitialStreams.filter((stream) =>
      (name === "songName" && stream.songName.toLowerCase().includes(value.toLowerCase())) ||
      (name === "artist" && stream.artist.toLowerCase().includes(value.toLowerCase()))
    );

    setStreams(filteredData);
    setCurrentPage(1); // Reset to first page on filtering
  };

  // Reset Filters
  const handleClearFilter = () => {
    setFilter({ songName: "", artist: "" });
    setStreams(InitialStreams);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Get Current Page Data
  const currentData = streams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
        <h2 className="text-lg font-medium dark:text-gray-100 text-black">Recent Streams</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex items-center">
            <input
              type="text"
              name="songName"
              placeholder="Filter by Song Name"
              value={filter.songName}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded-md bg-gray-700 text-gray-300 w-full md:w-auto"
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              name="artist"
              placeholder="Filter by Artist"
              value={filter.artist}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded-md bg-gray-700 text-gray-300 w-full md:w-auto"
            />
            <button
              onClick={handleClearFilter}
              className="ml-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="text-left text-gray-400">
          <tr>
            <th className="p-2 w-[150px]">Song Name</th>
            <th className="p-2 w-[150px]">Artist</th>
            <th className="p-2 w-[150px] hidden sm:table-cell">Date Streamed</th>
            <th className="p-2 w-[150px]">Stream Count</th>
            <th className="p-2 w-[100px] hidden sm:table-cell">User ID</th>
          </tr>
        </thead>
        <tbody className="min-h-[200px] max-h-[400px] overflow-auto">
          {currentData.length > 0 ? (
            currentData.map((stream, index) => (
              <tr key={index}>
                <td className="p-2">{stream.songName}</td>
                <td className="p-2">{stream.artist}</td>
                <td className="p-2 hidden sm:table-cell">{stream.dateStreamed}</td>
                <td className="p-2">{stream.streamCount}</td>
                <td className="p-2 hidden sm:table-cell">{stream.userId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;

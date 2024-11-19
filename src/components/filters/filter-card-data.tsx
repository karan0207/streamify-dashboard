interface FiltersProps {
    month: string;
    year: string;
    setMonth: (value: string) => void;
    setYear: (value: string) => void;
    months: string[];
    years: string[];
  }
  
  const Filters: React.FC<FiltersProps> = ({
    month,
    year,
    setMonth,
    setYear,
    months,
    years,
  }) => {
    return (
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {/* Month Selector */}
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
  
          {/* Year Selector */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default Filters;
  
import { LucideIcon } from "lucide-react";

type CardProp = {
    name: string;
    icon: LucideIcon;
    value: string;
    color: string;
  };

const StatCard = ({ name, icon: Icon, value, color }: CardProp) => {
  return (
    <div className={`dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 `}>
      <div className="px-4 md:px-6 py-5 md:py-4 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2 " style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-2xl font-semibold dark:text-gray-100 text-black">{value}</p>
      </div>
    </div>
  );
};
export default StatCard;




import { BarChart3 } from "lucide-react";

const StatsCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-blue-600" size={24} />
          <div>
            <p className="text-sm text-blue-600">전체</p>
            <p className="text-2xl font-bold text-blue-800">20</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsCard;

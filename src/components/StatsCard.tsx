
interface StatsCardProps {
  title: string;
  count: number;
  period: string;
  icon: React.ReactNode;
  color: 'red' | 'green' | 'navy' | 'gold';
}

const StatsCard = ({ title, count, period, icon, color }: StatsCardProps) => {
  const colorClasses = {
    red: 'bg-foundation-red',
    green: 'bg-foundation-green',
    navy: 'bg-foundation-navy',
    gold: 'bg-foundation-gold'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-foundation-red animate-scale-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-foundation-gray-600 text-sm font-medium">{period}</p>
          <p className="text-3xl font-bold text-foundation-navy mt-1">{count.toLocaleString()}</p>
          <p className="text-foundation-gray-700 font-medium mt-1">{title}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]} text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

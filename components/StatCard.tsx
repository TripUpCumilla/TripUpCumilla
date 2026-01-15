
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
  bgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, trendUp, icon, bgColor }) => (
  <div className="bg-white p-6 rounded-3xl border shadow-sm group hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-2xl ${bgColor}`}>
        {icon}
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-xs font-bold ${trendUp ? 'text-green-600' : 'text-orange-600'}`}>
          {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      )}
    </div>
    <div>
      <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1 text-slate-900">{value}</p>
    </div>
  </div>
);

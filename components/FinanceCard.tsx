
import React from 'react';

interface FinanceCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  bgColor: string;
}

export const FinanceCard: React.FC<FinanceCardProps> = ({ title, amount, icon, bgColor }) => (
  <div className="bg-white p-6 rounded-3xl border shadow-sm group hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">BDT {amount.toLocaleString()}</p>
  </div>
);

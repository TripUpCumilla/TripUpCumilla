
import React from 'react';
import { TrendingUp, Users, Briefcase, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tour, Booking } from '../types/index';
import { StatCard } from '../components/StatCard';

interface DashboardProps {
  tours: Tour[];
  bookings: Booking[];
}

const CHART_DATA = [
  { name: 'Jan', rev: 4000 }, { name: 'Feb', rev: 3000 },
  { name: 'Mar', rev: 2000 }, { name: 'Apr', rev: 2780 },
  { name: 'May', rev: 1890 }, { name: 'Jun', rev: 2390 },
];

export const Dashboard: React.FC<DashboardProps> = ({ tours, bookings }) => {
  const totalRevenue = bookings.reduce((sum, b) => sum + b.paidAmount, 0);
  const activeToursCount = tours.filter(t => t.status === 'active').length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value={`BDT ${totalRevenue.toLocaleString()}`} trend="+12.5%" trendUp icon={<TrendingUp className="text-teal-600" />} bgColor="bg-teal-50" />
        <StatCard title="Active Tours" value={activeToursCount.toString()} trend="In Season" trendUp icon={<Briefcase className="text-blue-600" />} bgColor="bg-blue-50" />
        <StatCard title="Bookings" value={bookings.length.toString()} trend="+4 today" trendUp icon={<Users className="text-purple-600" />} bgColor="bg-purple-50" />
        <StatCard title="Pending" value="BDT 45k" trend="High" trendUp={false} icon={<AlertCircle className="text-orange-600" />} bgColor="bg-orange-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="font-bold text-lg mb-6">Revenue Overview</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="rev" fill="#0d9488" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="font-bold text-lg mb-6">Upcoming Trips</h3>
          <div className="space-y-4">
            {tours.filter(t => t.status === 'active').map(tour => (
              <div key={tour.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-xs font-bold text-slate-500 uppercase">
                  <span>{new Date(tour.startDate).toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-slate-900 text-base -mt-1">{new Date(tour.startDate).getDate()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate">{tour.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500"><Clock size={12} /><span>{tour.bookedSeats}/{tour.capacity} Filled</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

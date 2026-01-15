
import React from 'react';
import { ShieldCheck, Clock, AlertTriangle, FileText, Search } from 'lucide-react';
import { Customer } from '../types/index';

interface VisaTrackingProps {
  customers: Customer[];
}

export const VisaTracking: React.FC<VisaTrackingProps> = ({ customers }) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-100 p-6 rounded-3xl">
          <ShieldCheck className="text-green-600 mb-2" />
          <p className="text-sm text-green-700 font-medium">Approved Visas</p>
          <p className="text-3xl font-bold text-green-900">{customers.filter(c => c.visaStatus === 'Approved').length}</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl">
          <Clock className="text-orange-600 mb-2" />
          <p className="text-sm text-orange-700 font-medium">Pending Processing</p>
          <p className="text-3xl font-bold text-orange-900">{customers.filter(c => c.visaStatus === 'Pending').length}</p>
        </div>
        <div className="bg-red-50 border border-red-100 p-6 rounded-3xl">
          <AlertTriangle className="text-red-600 mb-2" />
          <p className="text-sm text-red-700 font-medium">Attention Required</p>
          <p className="text-3xl font-bold text-red-900">3</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-bold text-lg">Passport & Visa Ledger</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input className="pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500" placeholder="Search ID..." />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-slate-500 text-left text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Passport No</th>
                <th className="px-6 py-4">Visa Status</th>
                <th className="px-6 py-4">Expiry Tracking</th>
                <th className="px-6 py-4">Doc Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {customers.map(c => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">{c.name}</td>
                  <td className="px-6 py-4 font-mono text-slate-500">{c.passportNo}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      c.visaStatus === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {c.visaStatus.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">2027-10-15 (Valid)</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-teal-600 font-bold hover:underline">
                      <FileText size={14} />
                      View Scan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

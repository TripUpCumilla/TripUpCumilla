
import React from 'react';
import { Search, Plus, User, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { Customer } from '../types/index';

interface CustomersProps {
  customers: Customer[];
}

export const Customers: React.FC<CustomersProps> = ({ customers }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search customers..." 
          />
        </div>
        <button className="px-6 py-3 bg-teal-600 text-white rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/20"><Plus size={18} />New Customer</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map(customer => (
          <div key={customer.id} className="bg-white p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-xl">
                {customer.name.charAt(0)}
              </div>
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold ${
                customer.visaStatus === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                VISA: {customer.visaStatus.toUpperCase()}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{customer.name}</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500"><Phone size={14} />{customer.phone}</div>
              <div className="flex items-center gap-2 text-sm text-slate-500"><Mail size={14} />{customer.email}</div>
              <div className="flex items-center gap-2 text-sm text-slate-500"><FileText size={14} />Pass: {customer.passportNo}</div>
            </div>

            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">{customer.bookingHistory.length} Trips Completed</span>
              <button className="text-teal-600 hover:translate-x-1 transition-transform"><ChevronRight size={20} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

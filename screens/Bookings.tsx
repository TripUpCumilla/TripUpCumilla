
import React from 'react';
import { Calendar, Search, Filter, MoreHorizontal, User, MapPin } from 'lucide-react';
import { Booking, Tour, Customer } from '../types/index';
import { pdfService } from '../services/pdf.service';

interface BookingsProps {
  bookings: Booking[];
  tours: Tour[];
  customers: Customer[];
}

export const Bookings: React.FC<BookingsProps> = ({ bookings, tours, customers }) => {
  const getTour = (id: string) => tours.find(t => t.id === id);
  const getCustomer = (id: string) => customers.find(c => c.id === id);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search bookings by ID or Name..." 
          />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 bg-white border rounded-2xl text-slate-600 font-semibold flex items-center gap-2"><Filter size={18} />Filters</button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-slate-500 text-left text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Booking Ref</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Tour / Package</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {bookings.map(b => {
                const tour = getTour(b.tourId);
                const customer = getCustomer(b.customerId);
                return (
                  <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-teal-600">#BK-{b.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold"><User size={14} /></div>
                        <div>
                          <p className="font-semibold">{customer?.name || 'Unknown'}</p>
                          <p className="text-xs text-slate-400">{customer?.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium">{tour?.name || 'TBA'}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-400"><MapPin size={12} />{tour?.destination}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        b.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                        b.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {b.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold">BDT {b.paidAmount.toLocaleString()}</p>
                      <p className={`text-[10px] font-bold ${b.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-500'}`}>
                        {b.paymentStatus.toUpperCase()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => customer && tour && pdfService.generateInvoice(b, customer, tour)}
                          className="p-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100" title="Invoice PDF"
                        >
                          <Calendar size={16} />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"><MoreHorizontal size={16} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { Plus, Search, Filter, MapPin, Calendar, Users, FileText } from 'lucide-react';
import { Tour } from '../types/index';
import { pdfService } from '../services/pdf.service';

interface ToursProps {
  tours: Tour[];
  onSave: (tour: Tour) => void;
}

export const Tours: React.FC<ToursProps> = ({ tours }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = tours.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search tours..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 bg-white border rounded-2xl text-slate-600 font-semibold flex items-center gap-2"><Filter size={18} />Filters</button>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/20"><Plus size={18} />Create Tour</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(tour => (
          <div key={tour.id} className="bg-white rounded-3xl border shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img src={`https://picsum.photos/seed/${tour.id}/600/400`} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-teal-500/80 text-white rounded-full text-xs font-bold backdrop-blur-md">{tour.status.toUpperCase()}</span></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{tour.name}</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4"><MapPin size={16} />{tour.destination}</div>
              <div className="grid grid-cols-2 gap-4 py-4 border-y mb-6">
                <div><p className="text-xs text-slate-400 font-medium">DEPARTURE</p><div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700"><Calendar size={14} />{tour.startDate}</div></div>
                <div><p className="text-xs text-slate-400 font-medium">CAPACITY</p><div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700"><Users size={14} />{tour.bookedSeats}/{tour.capacity}</div></div>
              </div>
              <div className="flex items-center justify-between">
                <div><p className="text-xs text-slate-400 font-medium">PRICE</p><p className="text-xl font-bold">BDT {tour.price.toLocaleString()}</p></div>
                <button onClick={() => pdfService.generateTourReport(tour)} className="p-3 text-teal-600 bg-teal-50 rounded-xl"><FileText size={20} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

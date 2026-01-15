
import React from 'react';
import { Building2, Plus, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { Vendor } from '../types/index';

interface VendorsProps {
  vendors: Vendor[];
}

export const Vendors: React.FC<VendorsProps> = ({ vendors }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-900">Partner Vendors</h3>
        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold flex items-center gap-2"><Plus size={18} />Add Partner</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map(vendor => (
          <div key={vendor.id} className="bg-white rounded-3xl border p-6 hover:shadow-lg transition-all border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${
                vendor.type === 'hotel' ? 'bg-blue-50 text-blue-600' : 
                vendor.type === 'transport' ? 'bg-purple-50 text-purple-600' : 'bg-teal-50 text-teal-600'
              }`}>
                <Building2 size={24} />
              </div>
              <span className="text-xs font-bold uppercase text-slate-400">{vendor.type}</span>
            </div>
            
            <h4 className="text-lg font-bold mb-1">{vendor.name}</h4>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Phone size={14} />
              {vendor.contact}
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Payable Balance</p>
                <p className="text-lg font-bold text-slate-900">BDT {vendor.balance.toLocaleString()}</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-900"><ExternalLink size={18} /></button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-green-600 font-medium">
              <ShieldCheck size={14} />
              Verified Partner
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

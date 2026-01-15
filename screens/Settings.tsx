
import React from 'react';
import { User, Building, CreditCard, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { APP_CONFIG } from '../constants/index';

export const Settings: React.FC = () => {
  const sections = [
    { icon: <User size={20} />, title: 'Personal Profile', subtitle: 'Manage your owner details' },
    { icon: <Building size={20} />, title: 'Agency Information', subtitle: 'Address, Logo, and Branding' },
    { icon: <CreditCard size={20} />, title: 'Bank & Currency', subtitle: 'Manage BDT accounts' },
    { icon: <Bell size={20} />, title: 'Notification Settings', subtitle: 'Trip alerts and payment dues' },
    { icon: <Shield size={20} />, title: 'Security', subtitle: 'PIN and Biometric settings' },
  ];

  return (
    <div className="max-w-3xl mx-auto py-4">
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="p-8 bg-slate-900 text-white flex items-center gap-6">
          <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-3xl font-bold">AK</div>
          <div>
            <h3 className="text-2xl font-bold">{APP_CONFIG.OWNER}</h3>
            <p className="text-slate-400">Owner, {APP_CONFIG.NAME}</p>
          </div>
        </div>

        <div className="divide-y">
          {sections.map((item, idx) => (
            <button key={idx} className="w-full p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left group">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          ))}
        </div>

        <div className="p-6 bg-slate-50">
          <button className="w-full p-4 bg-white border border-red-100 text-red-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            Logout from TUC Manager
          </button>
        </div>
      </div>
      <p className="text-center mt-8 text-xs text-slate-400 font-medium italic">Version 1.0.4 (Build 2024.05)</p>
    </div>
  );
};

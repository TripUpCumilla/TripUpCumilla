
import React, { useState } from 'react';
import { Menu, Bell } from 'lucide-react';
import { AppSection } from '../types/index';
import { NAVIGATION_ITEMS, APP_CONFIG } from '../constants/index';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center font-bold text-xl">{APP_CONFIG.SHORT_NAME}</div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Trip Up</h1>
            <p className="text-xs text-slate-400">Cumilla Management</p>
          </div>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                ${activeSection === item.id ? 'bg-teal-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-800 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1">Owner</p>
          <p className="font-semibold text-sm">{APP_CONFIG.OWNER}</p>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8">
          <button className="p-2 -ml-2 md:hidden" onClick={() => setSidebarOpen(true)}><Menu size={24} /></button>
          <h2 className="text-xl font-bold md:block hidden">
            {NAVIGATION_ITEMS.find(n => n.id === activeSection)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-semibold">AK</div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
};

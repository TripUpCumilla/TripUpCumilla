
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './screens/Dashboard';
import { Tours } from './screens/Tours';
import { Accounting } from './screens/Accounting';
import { Bookings } from './screens/Bookings';
import { Customers } from './screens/Customers';
import { Vendors } from './screens/Vendors';
import { VisaTracking } from './screens/VisaTracking';
import { Settings } from './screens/Settings';
import { dbService } from './services/db.service';
import { AppSection, Tour, Booking, Customer, Vendor } from './types/index';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>('dashboard');
  const [tours, setTours] = useState<Tour[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    dbService.seedData();
    setTours(dbService.getTours());
    setBookings(dbService.getBookings());
    setCustomers(dbService.getCustomers());
    setVendors(dbService.getVendors());
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard tours={tours} bookings={bookings} />;
      case 'tours': return <Tours tours={tours} onSave={(t) => { dbService.saveTour(t); setTours(dbService.getTours()); }} />;
      case 'bookings': return <Bookings bookings={bookings} tours={tours} customers={customers} />;
      case 'customers': return <Customers customers={customers} />;
      case 'accounting': return <Accounting bookings={bookings} />;
      case 'vendors': return <Vendors vendors={vendors} />;
      case 'visa': return <VisaTracking customers={customers} />;
      case 'settings': return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4"><span className="text-4xl">🏗️</span></div>
            <h2 className="text-xl font-bold text-slate-600">Module Under Construction</h2>
            <p className="text-sm">We are bringing {activeSection} online soon.</p>
          </div>
        );
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
};

export default App;


import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './screens/Dashboard';
import Tours from './screens/Tours';
import Accounting from './screens/Accounting';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/accounting" element={<Accounting />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

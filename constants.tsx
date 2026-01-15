
import React from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  CalendarDays, 
  Wallet, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  Image as ImageIcon, 
  BarChart3, 
  Settings,
  Globe
} from 'lucide-react';
import { AppSection } from './types';

export const COLORS = {
  primary: '#0d9488', // Teal-600
  secondary: '#0f172a', // Slate-900
  accent: '#38bdf8', // Sky-400
  background: '#f8fafc',
};

export const NAVIGATION_ITEMS = [
  { id: 'dashboard' as AppSection, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'tours' as AppSection, label: 'Tours', icon: <Briefcase size={20} /> },
  { id: 'bookings' as AppSection, label: 'Bookings', icon: <CalendarDays size={20} /> },
  { id: 'customers' as AppSection, label: 'Customers', icon: <Users size={20} /> },
  { id: 'accounting' as AppSection, label: 'Accounting', icon: <Wallet size={20} /> },
  { id: 'destinations' as AppSection, label: 'Destinations', icon: <MapPin size={20} /> },
  { id: 'visa' as AppSection, label: 'Visa Tracking', icon: <ShieldCheck size={20} /> },
  { id: 'vendors' as AppSection, label: 'Vendors', icon: <Globe size={20} /> },
  { id: 'media' as AppSection, label: 'Media', icon: <ImageIcon size={20} /> },
  { id: 'reports' as AppSection, label: 'Reports', icon: <BarChart3 size={20} /> },
  { id: 'settings' as AppSection, label: 'Settings', icon: <Settings size={20} /> },
];

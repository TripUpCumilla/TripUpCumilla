
export type AppSection = 
  | 'dashboard' 
  | 'tours' 
  | 'destinations' 
  | 'customers' 
  | 'bookings' 
  | 'accounting' 
  | 'vendors' 
  | 'visa' 
  | 'media' 
  | 'reports' 
  | 'settings';

export interface Tour {
  id: string;
  name: string;
  destination: string;
  price: number;
  startDate: string;
  endDate: string;
  capacity: number;
  bookedSeats: number;
  status: 'active' | 'completed' | 'draft';
  itinerary: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  passportNo: string;
  visaStatus: string;
  bookingHistory: string[];
}

export interface Booking {
  id: string;
  tourId: string;
  customerId: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'waiting';
  totalAmount: number;
  paidAmount: number;
  paymentStatus: 'paid' | 'partial' | 'due';
  createdAt: string;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

export interface Vendor {
  id: string;
  name: string;
  type: 'hotel' | 'transport' | 'guide';
  contact: string;
  balance: number;
}


import { Tour, Booking, Customer, Expense, Vendor } from '../types';

const STORAGE_KEYS = {
  TOURS: 'tuc_tours',
  BOOKINGS: 'tuc_bookings',
  CUSTOMERS: 'tuc_customers',
  EXPENSES: 'tuc_expenses',
  VENDORS: 'tuc_vendors',
};

export const dbService = {
  getTours: (): Tour[] => {
    const data = localStorage.getItem(STORAGE_KEYS.TOURS);
    return data ? JSON.parse(data) : [];
  },
  saveTour: (tour: Tour) => {
    const tours = dbService.getTours();
    const index = tours.findIndex(t => t.id === tour.id);
    if (index > -1) tours[index] = tour;
    else tours.push(tour);
    localStorage.setItem(STORAGE_KEYS.TOURS, JSON.stringify(tours));
  },
  
  getBookings: (): Booking[] => {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return data ? JSON.parse(data) : [];
  },
  saveBooking: (booking: Booking) => {
    const bookings = dbService.getBookings();
    bookings.push(booking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  },

  getCustomers: (): Customer[] => {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
    return data ? JSON.parse(data) : [];
  },
  saveCustomer: (customer: Customer) => {
    const customers = dbService.getCustomers();
    customers.push(customer);
    localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
  },

  seedData: () => {
    if (dbService.getTours().length === 0) {
      const mockTours: Tour[] = [
        {
          id: '1',
          name: 'Classic Sylhet Escape',
          destination: 'Sylhet, Bangladesh',
          price: 15000,
          startDate: '2024-06-15',
          endDate: '2024-06-18',
          capacity: 20,
          bookedSeats: 12,
          status: 'active',
          itinerary: [{ day: 1, title: 'Arrival', description: 'Meet and greet at airport' }]
        },
        {
          id: '2',
          name: 'Sundarbans Adventure',
          destination: 'Khulna, Bangladesh',
          price: 22000,
          startDate: '2024-07-10',
          endDate: '2024-07-14',
          capacity: 15,
          bookedSeats: 15,
          status: 'completed',
          itinerary: []
        }
      ];
      localStorage.setItem(STORAGE_KEYS.TOURS, JSON.stringify(mockTours));
    }
    
    if (dbService.getCustomers().length === 0) {
      const mockCustomers: Customer[] = [
        { id: 'c1', name: 'John Doe', email: 'john@example.com', phone: '01711223344', passportNo: 'A12345678', visaStatus: 'Approved', bookingHistory: ['1'] },
        { id: 'c2', name: 'Amena Akter', email: 'amena@tuc.com', phone: '0188888888', passportNo: 'B9999999', visaStatus: 'N/A', bookingHistory: [] }
      ];
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(mockCustomers));
    }
  }
};

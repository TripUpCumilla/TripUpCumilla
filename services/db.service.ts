
import { Tour, Booking, Customer, Vendor } from '../types/index';

const STORAGE_KEYS = {
  TOURS: 'tuc_tours',
  BOOKINGS: 'tuc_bookings',
  CUSTOMERS: 'tuc_customers',
  EXPENSES: 'tuc_expenses',
  VENDORS: 'tuc_vendors',
};

class DBService {
  private get<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  private set<T>(key: string, data: T[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getTours(): Tour[] {
    return this.get<Tour>(STORAGE_KEYS.TOURS);
  }

  saveTour(tour: Tour): void {
    const tours = this.getTours();
    const index = tours.findIndex(t => t.id === tour.id);
    if (index > -1) tours[index] = tour;
    else tours.push(tour);
    this.set(STORAGE_KEYS.TOURS, tours);
  }

  getBookings(): Booking[] {
    return this.get<Booking>(STORAGE_KEYS.BOOKINGS);
  }

  getCustomers(): Customer[] {
    return this.get<Customer>(STORAGE_KEYS.CUSTOMERS);
  }

  getVendors(): Vendor[] {
    return this.get<Vendor>(STORAGE_KEYS.VENDORS);
  }

  seedData(): void {
    if (this.getTours().length === 0) {
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
          itinerary: [{ day: 1, title: 'Arrival', description: 'Meet and greet' }]
        },
        {
          id: '2',
          name: 'Sajek Valley Clouds',
          destination: 'Rangamati, Bangladesh',
          price: 8500,
          startDate: '2024-08-10',
          endDate: '2024-08-13',
          capacity: 30,
          bookedSeats: 25,
          status: 'active',
          itinerary: []
        }
      ];
      this.set(STORAGE_KEYS.TOURS, mockTours);
    }
    
    if (this.getCustomers().length === 0) {
      const mockCustomers: Customer[] = [
        { id: 'c1', name: 'John Doe', email: 'john@example.com', phone: '01711223344', passportNo: 'A12345678', visaStatus: 'Approved', bookingHistory: ['1'] },
        { id: 'c2', name: 'Karim Ahmed', email: 'karim@email.com', phone: '01822334455', passportNo: 'B22334455', visaStatus: 'Pending', bookingHistory: ['b2'] }
      ];
      this.set(STORAGE_KEYS.CUSTOMERS, mockCustomers);
    }

    if (this.getBookings().length === 0) {
      const mockBookings: Booking[] = [
        { id: 'b1', tourId: '1', customerId: 'c1', status: 'confirmed', totalAmount: 15000, paidAmount: 10000, paymentStatus: 'partial', createdAt: '2024-05-01' },
        { id: 'b2', tourId: '2', customerId: 'c2', status: 'pending', totalAmount: 8500, paidAmount: 8500, paymentStatus: 'paid', createdAt: '2024-05-10' }
      ];
      this.set(STORAGE_KEYS.BOOKINGS, mockBookings);
    }

    if (this.getVendors().length === 0) {
      const mockVendors: Vendor[] = [
        { id: 'v1', name: 'Grand Sultan Resort', type: 'hotel', contact: '01711223344', balance: 50000 },
        { id: 'v2', name: 'Green Line Travels', type: 'transport', contact: '01888223344', balance: 12000 },
        { id: 'v3', name: 'Local Guide Sajek', type: 'guide', contact: '01555223344', balance: 0 }
      ];
      this.set(STORAGE_KEYS.VENDORS, mockVendors);
    }
  }
}

export const dbService = new DBService();


import { jsPDF } from 'jspdf';
import { Tour, Booking, Customer } from '../types';

export const pdfService = {
  generateInvoice: (booking: Booking, customer: Customer, tour: Tour) => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(13, 148, 136); // Teal
    doc.text('TRIP UP CUMILLA (TUC)', 20, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Official Booking Invoice', 20, 28);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 20);
    
    // Content
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('Customer Details', 20, 50);
    doc.setFontSize(11);
    doc.text(`Name: ${customer.name}`, 20, 58);
    doc.text(`Phone: ${customer.phone}`, 20, 64);
    
    doc.setFontSize(14);
    doc.text('Tour Details', 20, 80);
    doc.setFontSize(11);
    doc.text(`Package: ${tour.name}`, 20, 88);
    doc.text(`Destination: ${tour.destination}`, 20, 94);
    doc.text(`Departure: ${tour.startDate}`, 20, 100);
    
    // Financials
    doc.setFillColor(248, 250, 252);
    doc.rect(20, 120, 170, 40, 'F');
    doc.setFontSize(12);
    doc.text('Total Amount:', 30, 132);
    doc.text(`BDT ${booking.totalAmount.toLocaleString()}`, 140, 132);
    doc.text('Amount Paid:', 30, 142);
    doc.text(`BDT ${booking.paidAmount.toLocaleString()}`, 140, 142);
    doc.setFont('helvetica', 'bold');
    doc.text('Balance Due:', 30, 152);
    doc.text(`BDT ${(booking.totalAmount - booking.paidAmount).toLocaleString()}`, 140, 152);
    
    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Thank you for choosing Trip Up Cumilla!', 105, 190, { align: 'center' });
    doc.text('Owner: Amena Akter Khiya', 105, 196, { align: 'center' });
    
    doc.save(`Invoice_${booking.id}.pdf`);
  },

  generateTourReport: (tour: Tour) => {
    const doc = new jsPDF();
    doc.text(`Tour Report: ${tour.name}`, 20, 20);
    doc.text(`Status: ${tour.status}`, 20, 30);
    doc.text(`Capacity: ${tour.bookedSeats}/${tour.capacity}`, 20, 40);
    doc.save(`Tour_Report_${tour.id}.pdf`);
  }
};

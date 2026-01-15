
import { jsPDF } from 'jspdf';
import { Tour, Booking, Customer } from '../types/index';
import { APP_CONFIG } from '../constants/index';

class PDFService {
  private drawHeader(doc: jsPDF, title: string) {
    doc.setFontSize(22);
    doc.setTextColor(13, 148, 136); // Teal
    doc.text(APP_CONFIG.NAME.toUpperCase(), 20, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(title, 20, 28);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 160, 20);
    doc.line(20, 32, 190, 32);
  }

  private drawFooter(doc: jsPDF) {
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
      doc.text(`Official Document of ${APP_CONFIG.SHORT_NAME} | Owner: ${APP_CONFIG.OWNER}`, 105, 290, { align: 'center' });
    }
  }

  generateInvoice(booking: Booking, customer: Customer, tour: Tour) {
    const doc = new jsPDF();
    this.drawHeader(doc, 'OFFICIAL BOOKING INVOICE');

    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('Customer Info', 20, 50);
    doc.setFontSize(11);
    doc.text(`Name: ${customer.name}`, 20, 58);
    doc.text(`Phone: ${customer.phone}`, 20, 64);
    
    doc.setFontSize(14);
    doc.text('Tour Details', 20, 80);
    doc.setFontSize(11);
    doc.text(`Package: ${tour.name}`, 20, 88);
    doc.text(`Departure: ${tour.startDate}`, 20, 94);
    
    doc.setFillColor(248, 250, 252);
    doc.rect(20, 110, 170, 40, 'F');
    doc.setFontSize(12);
    doc.text('Total:', 30, 122);
    doc.text(`BDT ${booking.totalAmount.toLocaleString()}`, 140, 122);
    doc.text('Paid:', 30, 132);
    doc.text(`BDT ${booking.paidAmount.toLocaleString()}`, 140, 132);
    doc.setFont('helvetica', 'bold');
    doc.text('Due:', 30, 142);
    doc.text(`BDT ${(booking.totalAmount - booking.paidAmount).toLocaleString()}`, 140, 142);
    
    this.drawFooter(doc);
    doc.save(`Invoice_${booking.id}.pdf`);
  }

  generateTourReport(tour: Tour) {
    const doc = new jsPDF();
    this.drawHeader(doc, 'TOUR STATUS REPORT');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Package: ${tour.name}`, 20, 50);
    doc.text(`Status: ${tour.status.toUpperCase()}`, 20, 60);
    doc.text(`Booked Seats: ${tour.bookedSeats} / ${tour.capacity}`, 20, 70);
    this.drawFooter(doc);
    doc.save(`Tour_Report_${tour.id}.pdf`);
  }

  generateAccountingReport(bookings: Booking[]) {
    const doc = new jsPDF();
    this.drawHeader(doc, 'FINANCIAL SUMMARY');
    const total = bookings.reduce((sum, b) => sum + b.totalAmount, 0);
    const paid = bookings.reduce((sum, b) => sum + b.paidAmount, 0);
    
    doc.text(`Total Receivables: BDT ${total.toLocaleString()}`, 20, 50);
    doc.text(`Total Collected: BDT ${paid.toLocaleString()}`, 20, 60);
    doc.text(`Outstanding Dues: BDT ${(total - paid).toLocaleString()}`, 20, 70);
    
    this.drawFooter(doc);
    doc.save('Accounting_Report.pdf');
  }
}

export const pdfService = new PDFService();

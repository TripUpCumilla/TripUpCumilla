
import React from 'react';
import { Wallet, TrendingUp, TrendingDown, Download, Plus } from 'lucide-react';
import { Booking } from '../types/index';
import { FinanceCard } from '../components/FinanceCard';
import { pdfService } from '../services/pdf.service';

interface AccountingProps {
  bookings: Booking[];
}

export const Accounting: React.FC<AccountingProps> = ({ bookings }) => {
  const totalRec = bookings.reduce((sum, b) => sum + b.totalAmount, 0);
  const totalPaid = bookings.reduce((sum, b) => sum + b.paidAmount, 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FinanceCard title="Total Receivables" amount={totalRec} icon={<Wallet className="text-blue-600" />} bgColor="bg-blue-50" />
        <FinanceCard title="Total Collected" amount={totalPaid} icon={<TrendingUp className="text-teal-600" />} bgColor="bg-teal-50" />
        <FinanceCard title="Outstanding Dues" amount={totalRec - totalPaid} icon={<TrendingDown className="text-orange-600" />} bgColor="bg-orange-50" />
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-bold text-lg">Transactions</h3>
          <div className="flex gap-3">
            <button onClick={() => pdfService.generateAccountingReport(bookings)} className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold transition-colors hover:bg-slate-200">
              <Download size={16} />Export PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700">
              <Plus size={16} />Add Expense
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50 text-slate-500 text-left text-xs uppercase font-bold">
            <tr><th className="px-6 py-4">ID</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Amount</th><th className="px-6 py-4">Date</th></tr>
          </thead>
          <tbody className="divide-y text-sm">
            {bookings.map(b => (
              <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium">#BK-{b.id}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${b.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {b.paymentStatus.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold">BDT {b.paidAmount.toLocaleString()}</td>
                <td className="px-6 py-4 text-slate-500">{b.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

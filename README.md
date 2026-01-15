
# TUC Manager - Pro Tourism Business Suite 🌍

TUC Manager is a premium, open-source administrative suite tailored for **Trip Up Cumilla (TUC)**. It provides a robust, offline-first dashboard for travel agency owners to manage packages, bookings, and financial ledgering without the overhead of complex ERP systems.

## 🎯 Purpose
The application is designed specifically for **Amena Akter Khiya** to replace manual Excel sheets and paper-based tracking with a modern, high-performance web interface. It prioritizes data privacy, local persistence, and professional reporting.

## ✨ Core Features
- **Business Intelligence Dashboard**: High-level metrics, revenue charts via Recharts, and urgency alerts.
- **Dynamic Tour Planning**: Itinerary builder, real-time seat tracking, and status management.
- **Financial Ledger**: Accounting module to track receivables, dues, and transaction histories.
- **PDF Reporting Engine**: Reusable service to generate branded invoices and tour reports.
- **Clean Architecture**: Strong TypeScript integration and modular component structure.

## 📂 Project Structure
```text
├── components/     # Atomic UI components (StatCards, Layout)
├── constants/      # App-wide configuration and static data
├── screens/        # Feature-complete modules (Dashboard, Accounting)
├── services/       # Core logic (PDF generation, LocalStorage DB)
├── types/          # Domain-specific TypeScript interfaces
└── App.tsx         # Orchestration layer
```

## 📄 PDF System
The application uses a centralized `pdf.service.ts` that handles:
- **Branding**: Automatically adds TUC logo and owner signatures.
- **Internationalization**: Formats currency as BDT and dates locally.
- **Multi-Report Support**: Export Invoices, Tour Reports, and Financial Summaries with a single click.

## 🛠️ Installation & Setup
# Install dependencies
npm install
# Build & deploy to GitHub Pages
npm run deploy
1. Clone the repo: `git clone https://github.com/tripupcumilla/tuc-manager.git`
2. Install dependencies: `npm install`
3. Start development: `npm start`

## 🗺️ Roadmap
- [ ] **Biometric Login**: Secure PIN or FaceID access for owner-only safety.
- [ ] **Cloud Sync**: Optional Supabase integration for multi-device synchronization.
- [ ] **WhatsApp API**: Direct "Send Invoice" functionality to customers.
- [ ] **Marketing Tools**: Automated poster generation for new tours.

## ⚖️ License
Licensed under the **MIT License**. Feel free to fork and adapt for your own travel agency!

---
*Built with ❤️ for Trip Up Cumilla by Amena Akter Khiya.*

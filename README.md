
# Afya Sahani HMS - Hospital Management System for Kenya

A modern, secure, and user-friendly Hospital Management System (HMS) designed specifically for small startup hospitals in Kenya. Built with cutting-edge web technologies to streamline essential hospital operations while ensuring compliance with local regulations.

## 🏥 Overview

Afya Sahani HMS is a comprehensive healthcare management platform that digitalizes core hospital operations including patient management, appointment scheduling, electronic medical records, billing, and pharmacy inventory. The system is optimized for Kenyan healthcare facilities with support for local payment methods (M-Pesa, Airtel Money), bilingual interface (English/Swahili), and compliance with Kenya Data Protection Act.

## ✨ Key Features

### 🔐 Authentication & Access Control
- **Secure Login System**: Role-based authentication with password protection
- **Multi-Role Support**: Admin, Doctor, Nurse, Receptionist, Pharmacist
- **Session Management**: Secure user sessions with automatic logout

### 👥 Patient Management
- **Patient Registration**: Comprehensive patient data capture including Kenya National ID
- **Patient Search**: Quick patient lookup and profile management
- **Unique Identifiers**: Automatic patient ID generation
- **Emergency Contacts**: Secure storage of emergency contact information

### 📅 Appointment Scheduling
- **Doctor-Specific Calendars**: Individual scheduling for each healthcare provider
- **Conflict Prevention**: Automated time slot validation
- **Status Tracking**: Real-time appointment status updates
- **Walk-in Support**: Flexible scheduling for unplanned visits

### 📋 Electronic Medical Records (EMR)
- **Clinical Notes**: Secure digital medical records
- **Diagnosis Tracking**: Comprehensive diagnosis and treatment history
- **Prescription Management**: Digital prescription creation and tracking
- **Vitals Recording**: Patient vital signs monitoring
- **Progress Notes**: Timestamped clinical progress tracking

### 💰 Billing & Payments
- **Itemized Billing**: Detailed service-based invoicing
- **Kenyan Payment Methods**: M-Pesa, Airtel Money, Cash, Card support
- **Insurance Integration**: Insurance claim generation and processing
- **Receipt Management**: Digital receipt generation and email delivery
- **Revenue Reporting**: Daily and periodic revenue analysis

### 💊 Pharmacy & Inventory
- **Stock Management**: Real-time drug inventory tracking
- **Expiry Alerts**: Automated expiration date monitoring
- **Low Stock Notifications**: Proactive inventory management
- **Prescription Linking**: Direct prescription-to-inventory integration
- **Supplier Management**: Basic supplier information and contact management

### 📊 Dashboard & Reporting
- **Real-time Statistics**: Live hospital metrics and KPIs
- **Quick Actions**: One-click access to common tasks
- **Recent Activity**: Latest hospital activities and updates
- **Payment Summary**: Financial overview and transaction history
- **Export Capabilities**: PDF and Excel report generation

## 🛠 Tech Stack

### Frontend Technologies
- **React 18.3.1**: Modern JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript for enhanced development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/UI**: High-quality, accessible React component library
- **Lucide React**: Beautiful, customizable SVG icon library

### UI Components & Libraries
- **Radix UI**: Unstyled, accessible components for design systems
- **React Hook Form**: Performant forms with easy validation
- **React Router DOM**: Declarative routing for React applications
- **Recharts**: Responsive chart library for data visualization
- **React Query (TanStack)**: Powerful data synchronization for React

### Styling & Animation
- **Tailwind CSS**: Custom design system with Kenya-specific theming
- **CSS Variables**: Dynamic theming and color management
- **Tailwind Animate**: Smooth animations and transitions
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **Vite**: Lightning-fast build tool
- **TypeScript**: Static type checking
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization

### Backend Integration (Recommended)
- **Supabase**: PostgreSQL database with real-time capabilities
- **Authentication**: Secure user management and session handling
- **Row Level Security**: Database-level access control
- **Real-time Updates**: Live data synchronization across users

## 🏗 Application Architecture

### Component Structure
```
src/
├── components/
│   ├── Auth/           # Authentication components
│   ├── Dashboard/      # Dashboard widgets and stats
│   ├── Layout/         # App layout and navigation
│   └── ui/            # Reusable UI components (Shadcn)
├── pages/             # Route-based page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
└── styles/            # Global styles and theme definitions
```

### Key Design Patterns
- **Component Composition**: Modular, reusable UI components
- **Custom Hooks**: Shared business logic and state management
- **Context Providers**: Global state management for authentication and theming
- **Responsive Design**: Mobile-first approach with desktop optimization

## 🌍 Kenya-Specific Features

### Localization
- **Bilingual Support**: English and Swahili interface options
- **Currency Formatting**: Kenyan Shilling (KES) formatting
- **Date/Time Formats**: Kenyan standard date and time representation
- **Phone Number Validation**: Kenya mobile number format validation

### Payment Integration
- **M-Pesa Integration**: Support for Kenya's leading mobile money platform
- **Airtel Money**: Alternative mobile money option
- **Multi-Payment Support**: Cash, card, and digital payment tracking

### Compliance
- **Data Protection**: Adherence to Kenya Data Protection Act 2019
- **Patient Consent**: Digital consent management and tracking
- **Audit Trails**: Comprehensive logging for regulatory compliance
- **Secure Data Storage**: Encrypted patient information storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Ogola720/afya-sahani-kenya
cd afya-sahani-kenya
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Demo Credentials
For testing purposes, use these demo credentials:
- **Email**: demo@hospital.ke
- **Password**: demo123
- **Role**: Any available role (Admin, Doctor, Nurse, etc.)

## 🔧 Configuration

### Environment Setup
The application uses environment variables for configuration. Create a `.env.local` file in the root directory:

```env
VITE_APP_NAME=Afya Sahani HMS
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Theming
The application uses a custom design system defined in:
- `src/index.css`: CSS variables and global styles
- `tailwind.config.ts`: Tailwind configuration and theme extensions

## 📱 User Roles & Permissions

### Administrator
- Full system access and configuration
- User management and role assignment
- System settings and customization
- Complete reporting and analytics

### Doctor
- Patient medical records access
- Appointment management
- Prescription creation and management
- Clinical notes and diagnosis entry

### Nurse
- Patient vitals recording
- Basic medical records access
- Appointment assistance
- Patient care coordination

### Receptionist
- Patient registration and check-in
- Appointment scheduling and management
- Basic billing and payment processing
- Front desk operations

### Pharmacist
- Pharmacy inventory management
- Prescription processing and dispensing
- Drug stock monitoring and alerts
- Supplier management

## 🔒 Security Features

- **Role-Based Access Control (RBAC)**: Granular permissions based on user roles
- **Secure Authentication**: Password hashing and session management
- **Data Encryption**: Encrypted data storage and transmission
- **Audit Logging**: Comprehensive activity tracking
- **Input Validation**: Protection against injection attacks
- **Session Security**: Automatic logout and session timeout

## 📊 Reporting Capabilities

- **Patient Statistics**: Registration trends and demographics
- **Appointment Analytics**: Booking patterns and attendance rates
- **Revenue Reports**: Financial performance and payment analysis
- **Pharmacy Reports**: Inventory levels and usage patterns
- **Staff Performance**: Productivity and efficiency metrics

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: support@afyasahani.ke
- Documentation: [Project Wiki](https://github.com/Ogola720/afya-sahani-kenya/wiki)

## 🔮 Future Roadmap

- **Laboratory Integration**: Lab test ordering and results management
- **Inpatient Management**: Ward management and bed allocation
- **Advanced Analytics**: AI-powered insights and predictions
- **Mobile App**: Native mobile applications for iOS and Android
- **Telemedicine**: Video consultation capabilities
- **Multi-facility Support**: Support for hospital chains and networks

---

**Built with ❤️ for Kenyan Healthcare** - Transforming healthcare delivery through innovative digital solutions.

# Karibu Kenya: A Digital Safety and Support Platform for Independent Tourists

**A project by Akhonya Ursullah Khanguha**  
*Kabarak University - Department of Computer Science & IT*

## 🎯 Project Overview

Karibu Kenya is a comprehensive web-based tourism support platform designed to streamline travel logistics for visitors exploring Kenya. The system consolidates core services such as transportation booking, accommodation access, and real-time safety notifications into a unified digital experience.

## 🚀 Key Features

### ✅ Implemented Features
- **User Authentication & Authorization** (JWT-based)
- **Responsive Web Interface** (React Router v7 + TypeScript)
- **Backend API Infrastructure** (Node.js + Express + MongoDB)
- **Real-time Notifications** (Socket.IO)
- **Email Verification & Password Recovery**
- **Modern UI Components** (Tailwind CSS)

### 🔄 In Development
- **Accommodation Booking** (Hotels + Airbnb integration)
- **Transportation Services** (Uber integration + Public transport)
- **Travel Planner & Recommendations** (AI-powered suggestions)
- **Feedback & Rating System**
- **Admin Dashboard**
- **Real-time Safety Alerts** (Location-based notifications)

## 🏗️ System Architecture

### Frontend (React Router v7)
```
karibu-kenya-frontend/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── auth/           # Authentication components
│   │   ├── ui/             # Base UI components
│   │   └── layout/         # Layout components
│   ├── contexts/           # React contexts (Auth, etc.)
│   ├── routes/             # Page components
│   ├── services/           # API services
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
```

### Backend (Node.js + Express)
```
karibu-kenya-backend/
├── src/
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── middleware/        # Custom middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic services
│   ├── utils/             # Utility functions
│   └── config/            # Configuration files
```

## 🛠️ Technology Stack

### Frontend
- **React Router v7** - Modern React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time communication
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Socket.IO** - Real-time communication
- **Nodemailer** - Email service
- **Bcrypt** - Password hashing

### Third-Party Integrations
- **Google Maps API** - Location services
- **Uber API** - Ride booking
- **Amadeus/TripAdvisor API** - Travel recommendations
- **Weather API** - Safety alerts

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd KK
   ```

2. **Backend Setup**
   ```bash
   cd karibu-kenya-backend
   npm install
   cp env.example .env
   # Update .env with your configuration
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd karibu-kenya-frontend
   npm install --legacy-peer-deps
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## 📱 Core Modules

### 1. User Registration and Authentication
- User registration with email verification
- Secure login with JWT tokens
- Password recovery system
- User profile management
- Role-based access control

### 2. Accommodation Module
- Hotel and Airbnb listing integration
- Advanced search and filtering
- Booking management
- Price comparison
- Review and rating system

### 3. Transportation Module
- Uber ride booking integration
- Public transport information
- Route planning and optimization
- Real-time tracking
- Fare estimation

### 4. Travel Planner & Recommendation Module
- AI-powered itinerary creation
- Personalized recommendations
- Activity suggestions
- Budget planning
- Itinerary sharing

### 5. Feedback and Rating System
- User reviews and ratings
- Photo uploads
- Moderation tools
- Helpful voting system
- Verified reviews

### 6. Admin Dashboard
- User management
- Content moderation
- Analytics and reporting
- Safety alert management
- System configuration

## 🔒 Security Features

- **Password Security**: Bcrypt hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: API request throttling
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Comprehensive data validation
- **Account Lockout**: Protection against brute force attacks
- **Email Verification**: Account activation system

## 🌍 Real-time Features

- **WebSocket Connections**: Real-time notifications
- **Location-based Alerts**: Safety notifications by location
- **Live Booking Updates**: Real-time booking status
- **Emergency Notifications**: Critical safety alerts
- **Chat Support**: Real-time customer support

## 📊 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/me` - Get current user
- `PUT /api/v1/auth/updatedetails` - Update user details
- `PUT /api/v1/auth/updatepassword` - Update password

### Accommodation
- `GET /api/v1/accommodation` - Get listings
- `POST /api/v1/accommodation/search` - Search accommodations
- `POST /api/v1/accommodation/book` - Book accommodation

### Transportation
- `GET /api/v1/transport/estimate` - Get ride estimates
- `POST /api/v1/transport/request` - Request ride
- `GET /api/v1/transport/status/:id` - Get ride status

### Travel Planner
- `POST /api/v1/planner/itinerary` - Create itinerary
- `GET /api/v1/planner/recommendations` - Get recommendations
- `PUT /api/v1/planner/itinerary/:id` - Update itinerary

### Safety Alerts
- `GET /api/v1/alerts` - Get safety alerts
- `GET /api/v1/alerts/location/:location` - Get location alerts
- `POST /api/v1/alerts/subscribe` - Subscribe to alerts

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching
- **Accessibility**: WCAG compliant
- **Multi-language Support**: English and Swahili
- **Progressive Web App**: Offline capabilities
- **Modern Interface**: Clean and intuitive design

## 🧪 Testing

```bash
# Backend tests
cd karibu-kenya-backend
npm test

# Frontend tests
cd karibu-kenya-frontend
npm test
```

## 🚀 Deployment

### Environment Variables
See `karibu-kenya-backend/env.example` for all required environment variables.

### Cloud Deployment
The application is designed for deployment on:
- **Vercel** (Frontend)
- **Railway/Heroku** (Backend)
- **MongoDB Atlas** (Database)
- **Cloudinary** (File storage)

## 📈 Future Enhancements

- **Mobile App**: React Native application
- **AI Chatbot**: Customer support automation
- **Blockchain Integration**: Secure payment processing
- **IoT Integration**: Smart hotel room features
- **AR/VR Support**: Virtual tour experiences
- **Advanced Analytics**: Machine learning insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Akhonya Ursullah Khanguha**  
Kabarak University  
Department of Computer Science & IT  
Email: [your-email@example.com]

## 🙏 Acknowledgments

- Dr. Andrew Kipkebut (Supervisor)
- Kabarak University Faculty
- Open source community
- Tourism industry stakeholders

---

**Karibu Kenya** - *Welcome to Kenya, your digital travel companion!* 🇰🇪
# Karibu Kenya Backend API

Backend API for Karibu Kenya - A Digital Safety and Support Platform for Independent Tourists.

## Features

- **User Authentication & Authorization** (JWT-based)
- **Accommodation Booking** (Hotels + Airbnb integration)
- **Transportation Services** (Uber integration + Public transport)
- **Travel Planner & Recommendations** (AI-powered suggestions)
- **Feedback & Rating System**
- **Admin Dashboard**
- **Real-time Safety Alerts** (WebSocket-based)
- **Multi-language Support** (English + Swahili)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.IO
- **Email**: Nodemailer
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Express Validator

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd karibu-kenya-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   - MongoDB connection string
   - JWT secrets
   - Email configuration
   - Third-party API keys (Google Maps, Uber, etc.)

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get current user
- `PUT /api/v1/auth/updatedetails` - Update user details
- `PUT /api/v1/auth/updatepassword` - Update password
- `POST /api/v1/auth/forgotpassword` - Forgot password
- `PUT /api/v1/auth/resetpassword/:token` - Reset password
- `GET /api/v1/auth/verify-email/:token` - Verify email

### Accommodation
- `GET /api/v1/accommodation` - Get accommodation listings
- `GET /api/v1/accommodation/:id` - Get specific accommodation
- `POST /api/v1/accommodation/search` - Search accommodations
- `POST /api/v1/accommodation/book` - Book accommodation

### Transportation
- `GET /api/v1/transport/estimate` - Get ride estimates
- `POST /api/v1/transport/request` - Request ride
- `GET /api/v1/transport/status/:id` - Get ride status
- `GET /api/v1/transport/public` - Get public transport info

### Travel Planner
- `POST /api/v1/planner/itinerary` - Create itinerary
- `GET /api/v1/planner/recommendations` - Get recommendations
- `PUT /api/v1/planner/itinerary/:id` - Update itinerary
- `DELETE /api/v1/planner/itinerary/:id` - Delete itinerary

### Feedback & Ratings
- `POST /api/v1/feedback` - Submit feedback
- `GET /api/v1/feedback/:id` - Get feedback
- `PUT /api/v1/feedback/:id` - Update feedback
- `DELETE /api/v1/feedback/:id` - Delete feedback

### Admin
- `GET /api/v1/admin/users` - Get all users
- `GET /api/v1/admin/analytics` - Get analytics
- `POST /api/v1/admin/alerts` - Create safety alert
- `PUT /api/v1/admin/alerts/:id` - Update alert

### Safety Alerts
- `GET /api/v1/alerts` - Get safety alerts
- `GET /api/v1/alerts/location/:location` - Get location-specific alerts
- `POST /api/v1/alerts/subscribe` - Subscribe to alerts

## Environment Variables

See `env.example` for all required environment variables.

## Database Models

- **User**: User accounts and preferences
- **Accommodation**: Hotel and Airbnb listings
- **Booking**: Accommodation and transport bookings
- **Itinerary**: Travel plans and recommendations
- **Feedback**: User reviews and ratings
- **Alert**: Safety notifications and warnings

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation and sanitization
- Account lockout after failed attempts

## Real-time Features

- WebSocket connections for real-time notifications
- Location-based safety alerts
- Live booking updates
- Emergency notifications

## Development

```bash
# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint
```

## Deployment

The application is designed to be deployed on cloud platforms like:
- Vercel
- Heroku
- AWS
- DigitalOcean

Make sure to set all environment variables in your deployment environment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Author

**Akhonya Ursullah Khanguha**  
Kabarak University  
Department of Computer Science & IT

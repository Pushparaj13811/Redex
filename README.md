# Redex - Quick Commerce Platform

<div align="center">
  <img src="public/assets/logo.png" alt="Redex Logo" width="200" />
  <h3>Delivering Essentials in Minutes</h3>
</div>

Redex is Nepal's leading quick commerce platform, delivering groceries, fresh produce, household essentials, and more to your doorstep in under 30 minutes.

## Features

### For Customers
- **⚡ Express Delivery**: Groceries and essentials delivered within 30 minutes
- **🔒 Secure Authentication**: Phone number login with OTP verification and admin login
- **🛒 Seamless Shopping**: Intuitive product browsing with search and filters
- **🔍 Detailed Product Information**: Rich product details, specifications, and user reviews
- **💲 Special Offers**: Coupons, discounts, and super saver deals
- **📱 Mobile-first Design**: Optimized experience across all devices
- **👤 Personalized Experience**: User dashboard, order history, and saved addresses
- **💳 Multiple Payment Options**: Support for various payment methods including cash on delivery

### For Administrators
- **📊 Dashboard**: Comprehensive admin panel for store management
- **📦 Inventory Management**: Track and update product availability
- **📝 Order Processing**: View and manage customer orders
- **👥 User Management**: Customer data and access control
- **📈 Analytics**: Sales reports and customer insights

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom theme
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **UI Components**: Custom component library built with SOLID principles
- **Authentication**: JWT with secure cookie storage
- **Testing**: Jest and React Testing Library

## Screenshots

<div align="center">
  <img src="public/assets/screenshot-home.png" alt="Homepage" width="45%" />
  <img src="public/assets/screenshot-product.png" alt="Product Page" width="45%" />
</div>

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/redex.git
   cd redex
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_API_URL=http://localhost:8000/api
   VITE_AUTH_COOKIE_NAME=redex_auth
   ```

3. Install dependencies:
   ```bash
   npm install
   # or using yarn
   yarn install
   # or using bun
   bun install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or using yarn
   yarn dev
   # or using bun
   bun dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # Reusable UI components
│   ├── auth/        # Authentication components
│   ├── layouts/     # Layout components
│   ├── navigation/  # Navigation components like Navbar, Footer
│   ├── product/     # Product-related components
│   └── ui/          # Base UI components like Button, Card
├── config/          # Configuration files including theme
├── data/            # Mock data for development
├── hooks/           # Custom React hooks
├── models/          # Business logic models
├── pages/           # Page components
├── routes/          # Routing configuration
├── store/           # Redux store setup
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Code Style and Conventions

- **SOLID Principles**: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion
- **Styling**: Uses Tailwind CSS with custom theme variables
- **Components**: Focus on reusability and composability
- **TypeScript**: Strong typing for improved developer experience and code quality
- **State Management**: Redux for global state, React hooks for local state

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## Deployment

### Production Build

1. Create a production build:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory, which can be deployed to any static hosting service.

### Recommended Hosting

- [Vercel](https://vercel.com/) - Zero configuration deployment
- [Netlify](https://www.netlify.com/) - Easy continuous deployment
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - Fast and secure hosting

## Contributing

We welcome contributions to Redex! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature/amazing-feature`
3. Make your changes and commit them: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

Please make sure your code follows our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact us at support@redex.com.np

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- All our contributors and users

# React Redux Modern Stack

[![CI](https://github.com/Rob-Leggett/react_redux_webpack/actions/workflows/ci.yml/badge.svg)](https://github.com/Rob-Leggett/react_redux_webpack/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.5-764ABC)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000)](https://expressjs.com/)

A modern full-stack application demonstrating React 19, Redux Toolkit, TypeScript, Vite, and Express with MongoDB.

## 🚀 Tech Stack

### Client
- **React 19** with functional components and hooks
- **Redux Toolkit** for state management
- **React Router 7** for routing
- **TypeScript** for type safety
- **Vite 6** for fast development and building
- **Vitest** + **React Testing Library** for testing
- **SCSS** for styling

### API
- **Express 5** with TypeScript
- **Mongoose 8** for MongoDB ODM
- **JWT** for authentication
- **Environment-based configuration**

### DevOps
- **GitHub Actions** for CI/CD
- **Docker Compose** for local development
- **ESLint 9** for code quality

## 📋 Prerequisites

- Node.js 20+ (use `nvm use` if you have nvm installed)
- MongoDB 7+ (or use Docker)
- npm 10+

## 🛠️ Quick Start

### Option 1: Docker (Recommended)

```bash
# Start all services (MongoDB, API, Client)
docker-compose up

# Access the app at http://localhost:8080
```

### Option 2: Manual Setup

#### 1. Start MongoDB
```bash
# If you have MongoDB installed locally
mongod

# Or run just MongoDB via Docker
docker run -d -p 27017:27017 --name mongodb mongo:7
```

#### 2. Start the API
```bash
cd api
cp .env.example .env  # Configure environment variables
npm install
npm run dev
```

#### 3. Start the Client
```bash
cd client
npm install
npm run dev
```

Open http://localhost:8080 in your browser.

## 🔐 Default Login

```
Username: example
Password: password
```

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI workflow
├── api/
│   ├── src/
│   │   ├── config/         # Environment configuration
│   │   ├── middleware/     # Express middleware (auth)
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Express app entry
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── features/       # Feature slices (Redux Toolkit)
│   │   ├── store/          # Redux store configuration
│   │   ├── test/           # Test utilities and tests
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── docker-compose.yml
└── README.md
```

## 🧪 Testing

```bash
# Client tests
cd client && npm test

# API tests
cd api && npm test

# Watch mode
npm run test:watch
```

## 📝 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/authenticate` | No | Login, returns JWT |
| GET | `/users` | JWT | List all users |
| GET | `/customer` | JWT | List all customers |
| GET | `/customer/:id` | JWT | Get customer by ID |
| POST | `/customer` | JWT | Create customer |
| PUT | `/customer/:id` | JWT | Update customer |
| DELETE | `/customer/:id` | JWT | Delete customer |
| GET | `/health` | No | Health check |

## 🔧 Available Scripts

### Client
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run lint` | Lint code |
| `npm run type-check` | TypeScript type checking |

### API
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm test` | Run tests |
| `npm run lint` | Lint code |
| `npm run type-check` | TypeScript type checking |

## 📦 Environment Variables

### API (.env)
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/react_redux_example_db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
CORS_ORIGINS=http://localhost:8080
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Migrated from legacy stack (React 15, Webpack 2, Node 6) to modern tooling in 2024.**

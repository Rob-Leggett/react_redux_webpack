import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { config } from './config/index.js';
import authRoutes from './routes/auth.js';
import customerRoutes from './routes/customer.js';
import usersRoutes from './routes/users.js';
import { User } from './models/User.js';

const app = express();

// Middleware
app.use(cors({ origin: config.corsOrigins }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/authenticate', authRoutes);
app.use('/customer', customerRoutes);
app.use('/users', usersRoutes);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Seed default user for development
async function seedDefaultUser() {
  const existingUser = await User.findOne({ name: 'example' });
  if (!existingUser) {
    await User.create({
      name: 'example',
      password: 'password',
      role: 'admin',
    });
    console.log('Default user created: example/password');
  }
}

// Connect to MongoDB and start server
async function start() {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB');
    
    if (config.nodeEnv === 'development') {
      await seedDefaultUser();
    }

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();

export default app;

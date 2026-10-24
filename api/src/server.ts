import mongoose from 'mongoose';
import app from './app.js';
import { config } from './config/index.js';
import { User } from './models/User.js';

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

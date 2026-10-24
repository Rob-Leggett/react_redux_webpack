import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { config } from '../config/index.js';
import { authLimiter } from '../middleware/rateLimit.js';

const router = Router();

router.post('/', authLimiter, async (req: Request, res: Response): Promise<void> => {
  // Express 5 leaves req.body undefined when no body was parsed
  const { username, password } = req.body ?? {};

  if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
    res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
    return;
  }

  try {
    const user = await User.findOne({ name: { $eq: username } });

    if (!user || user.password !== password) {
      res.status(401).json({
        success: false,
        message: 'Invalid username or password',
      });
      return;
    }

    const token = jwt.sign(
      { name: user.name, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: { name: user.name, role: user.role },
    });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default router;

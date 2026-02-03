import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { config } from '../config/index.js';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
    return;
  }

  try {
    const user = await User.findOne({ name: username });

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

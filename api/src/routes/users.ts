import { Router, Response } from 'express';
import { User } from '../models/User.js';
import { AuthRequest, authenticateToken } from '../middleware/auth.js';
import { apiLimiter } from '../middleware/rateLimit.js';

const router = Router();

router.use(apiLimiter);
router.use(authenticateToken);

router.get('/', async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.json({ success: true, users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

export default router;

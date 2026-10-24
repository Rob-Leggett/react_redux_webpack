import { Router, Response } from 'express';
import { Customer } from '../models/Customer.js';
import { AuthRequest, authenticateToken } from '../middleware/auth.js';
import { apiLimiter } from '../middleware/rateLimit.js';

const router = Router();

// Only accept known scalar fields so request bodies can't inject query operators or extra fields
function customerFields(body: unknown): Partial<Record<'firstName' | 'lastName' | 'company', string>> {
  const input = (body ?? {}) as Record<string, unknown>;
  const fields: Partial<Record<'firstName' | 'lastName' | 'company', string>> = {};
  for (const key of ['firstName', 'lastName', 'company'] as const) {
    if (typeof input[key] === 'string') fields[key] = input[key];
  }
  return fields;
}

router.use(apiLimiter);
router.use(authenticateToken);

router.get('/', async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const customers = await Customer.find();
    res.json({ success: true, customers });
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/:id', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      res.status(404).json({ success: false, message: 'Customer not found' });
      return;
    }
    res.json({ success: true, customer });
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const customer = new Customer(customerFields(req.body));
    await customer.save();
    res.status(201).json({ success: true, customer });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.put('/:id', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: customerFields(req.body) },
      { returnDocument: 'after', runValidators: true }
    );
    if (!customer) {
      res.status(404).json({ success: false, message: 'Customer not found' });
      return;
    }
    res.json({ success: true, customer });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.delete('/:id', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      res.status(404).json({ success: false, message: 'Customer not found' });
      return;
    }
    res.json({ success: true, message: 'Customer deleted' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

export default router;

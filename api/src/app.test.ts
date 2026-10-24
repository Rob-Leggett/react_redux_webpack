import { describe, it, expect } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from './app.js';

describe('app', () => {
  it('GET /health returns ok', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('POST /authenticate without a body returns 400', async () => {
    const res = await request(app).post('/authenticate');

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('rejects protected routes without a token', async () => {
    const res = await request(app).get('/users');

    expect(res.status).toBe(401);
  });

  it('rejects protected routes with an invalid token', async () => {
    const res = await request(app)
      .get('/customer')
      .set('Authorization', `Bearer ${jwt.sign({ name: 'x', role: 'user' }, 'wrong-secret')}`);

    expect(res.status).toBe(403);
  });
});

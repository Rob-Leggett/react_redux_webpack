import { describe, it, expect } from 'vitest';
import authReducer, { logout, clearError } from '../features/auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle logout', () => {
    const authenticatedState = {
      user: { name: 'test', role: 'user' },
      token: 'abc123',
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };

    const actual = authReducer(authenticatedState, logout());
    
    expect(actual.user).toBeNull();
    expect(actual.token).toBeNull();
    expect(actual.isAuthenticated).toBe(false);
  });

  it('should handle clearError', () => {
    const stateWithError = {
      ...initialState,
      error: 'Some error',
    };

    const actual = authReducer(stateWithError, clearError());
    
    expect(actual.error).toBeNull();
  });
});

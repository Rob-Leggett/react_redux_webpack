import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import Home from '../components/Home';

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });
};

describe('Home Component', () => {
  it('should display user name and role', () => {
    const store = createTestStore({
      auth: {
        user: { name: 'John', role: 'admin' },
        token: 'token123',
        isAuthenticated: true,
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Welcome, John!/)).toBeInTheDocument();
    expect(screen.getByText(/admin/)).toBeInTheDocument();
  });
});

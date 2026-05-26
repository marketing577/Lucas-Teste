import React from 'react';

export const AuthContext = React.createContext({
  auth: {
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
  },
  handleLogin: () => {},
  handleLogout: () => {},
});

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

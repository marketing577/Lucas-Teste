import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SellerDashboard from './pages/seller/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import { AuthContext } from './context/AuthContext';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');

    if (storedToken && storedUser) {
      setAuth({
        isAuthenticated: true,
        user: JSON.parse(storedUser),
        token: storedToken,
        role: storedRole,
      });
    }
  }, []);

  const handleLogin = (user, token, role) => {
    setAuth({
      isAuthenticated: true,
      user,
      token,
      role,
    });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', role);
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
      role: null,
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={!auth.isAuthenticated ? <LoginPage /> : <Navigate to={auth.role === 'admin' ? '/admin' : '/seller'} />}
          />
          <Route
            path="/seller/*"
            element={auth.isAuthenticated && auth.role === 'seller' ? <SellerDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin/*"
            element={auth.isAuthenticated && auth.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to={auth.isAuthenticated ? (auth.role === 'admin' ? '/admin' : '/seller') : '/login'} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
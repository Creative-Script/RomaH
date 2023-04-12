import React from 'react';
import { Navigate } from 'react-router-dom';
import { isReceptionist } from './userTypes';

const receptionist = (Component) => {
  const AuthenticatedComponent = (props) => {
    // Check if user is authenticated
    const isAuthenticated = isReceptionist();

    if (isAuthenticated) {
      // User is authenticated, render the protected component
      return <Component {...props} />;
    } else {
      // User is not authenticated, redirect to login page
      return <Navigate to="/login" />;
    }
  };

  return AuthenticatedComponent;
};

export default receptionist;
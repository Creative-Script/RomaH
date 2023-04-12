import React from 'react';
import { isAuthorized } from './userTypes';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    // Check if user is authenticated
    const isAuthenticated = isAuthorized();

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

export default withAuth;
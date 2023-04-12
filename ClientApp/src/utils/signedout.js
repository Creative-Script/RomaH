import React from 'react';
import { isAuthorized } from './userTypes';
import { Navigate } from 'react-router-dom';

const signedOut = (Component) => {
  const AuthenticatedComponent = (props) => {
    // Check if user is authenticated
    const isAuthenticated = isAuthorized();

    if (isAuthenticated) {
      // User is authenticated, render the protected component
      return  <></>;


    } else {
      // User is not authenticated, redirect to login page
      return  <Component {...props} />;;
    }
  };

  return AuthenticatedComponent;
};

export default signedOut;
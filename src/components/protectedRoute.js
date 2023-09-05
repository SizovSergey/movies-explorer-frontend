import React from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from './Preloader/Preloader';

const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.loggedIn === null) {
    return <Preloader />;
  }
  return (
   props.loggedIn ? <Component {...props} /> : <Navigate to='/signin' replace />
  );
}
export default ProtectedRoute;
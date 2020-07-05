/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;

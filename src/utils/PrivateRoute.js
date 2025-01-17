import React from 'react';
import { Redirect, Route } from "react-router-dom";
// import { ACCESS_TOKEN_NAME } from '../constants/api';

export default function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        localStorage['ACCESS_TOKEN_NAME'] ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
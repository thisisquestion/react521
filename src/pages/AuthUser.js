import React from 'react';
import {Redirect,Route} from 'react-router-dom';

let AuthUser = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    localStorage.getItem('user') ?
      <Component {...props} data={JSON.parse(localStorage.getItem('user'))} />
      : <Redirect to="/login" />
  }
  />
);




export default AuthUser
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      rest.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )};
  const mapStateToProps = state => ({
    isAuthenticated: state.AuthReducer.isAuthenticated
  })
  export default connect(mapStateToProps)(Auth);
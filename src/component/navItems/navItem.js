
import React from 'react';
import Aux from '../../hoc/hoc';
import { NavLink, Link } from 'react-router-dom';
import classes from './navItem.module.css';

import { connect } from 'react-redux'
import { AuthAction } from '../../Redux/action'

const NavItem = (props) => {
     console.log(props.items)
  let leftNav =  props.items.map(item => {
      return (
        <li key = {item.Name} className="nav-item">
            <NavLink className="nav-link" exact  activeClassName="active" to= {item.path}>{item.Name}</NavLink>
        </li>)}
      )

  const logout = () => {
    props.authAction(false);
  }
     
  let rightNav = (
    <ul class="navbar-nav">
        <NavLink className="nav-link" exact  activeClassName="active" to='/login'>logoin</NavLink>
    </ul>)
  if(props.isAuthenticated) {
    rightNav = (
      <ul class="navbar-nav">
          <NavLink className="nav-link" exact  onClick = {() => logout()} activeClassName="active" to='/login'>logout</NavLink>
      </ul>)
    } 

 return(
          <Aux>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
            {leftNav}
            </ul>
            {rightNav}
            </div>
          
         </Aux>   
        )
}

const mapDispatchToProps = dispatch => ({
  authAction: (isAuthenticated) => dispatch(AuthAction(isAuthenticated))
})

const mapStateToProps = state => ({
  isAuthenticated: state.AuthReducer.isAuthenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
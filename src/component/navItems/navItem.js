
import React from 'react';
import Aux from '../../hoc/hoc';
import { NavLink, Link } from 'react-router-dom';
import classes from './navItem.module.css';

const NavItem = (props) => {

     console.log(props.items)
    let navItems =  props.items.map(item => {
         return (<li key = {item.Name} className="nav-item">
                  <NavLink className="nav-link" exact  activeClassName="active" to={item.path}>{item.Name}</NavLink>
                </li>)
     })
     
 return(
          <Aux>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
            {navItems}
            </ul>
            <ul class="navbar-nav">
            <NavLink className="nav-link" exact  activeClassName="active" to='/logout'>logout</NavLink>
            <NavLink className="nav-link" exact  activeClassName="active" to='/login'>logoin</NavLink>
            </ul>
            </div>
          
         </Aux>   
        )
}

export default NavItem;
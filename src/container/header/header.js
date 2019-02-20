
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navitems from '../../component/navItems/navItem'


class Header extends Component {

     state = {
         header:[
             {
                 Name:'Home',
                 path:'/'
             },
             {
                Name:'Blog',
                path:'/blog'
            },
            {
                Name:'Pricing',
                path:'/pricing'
            },
            {
                Name:'Contact',
                path:'/contact'
            },
         ]
     }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Logo</Link>
            <Navitems items = {this.state.header} />
            </nav>
        )
    }
}

export default Header;
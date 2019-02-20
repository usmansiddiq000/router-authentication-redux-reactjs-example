import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import classes from './main.module.css'

import Home from '../../component/home/home'
import Blog from '../../component/blog/blog'
import Pricing from '../../component/pricing/pricing';
import Contact from '../../component/contact/contact'
import Login from '../../component/login/login';

class Main extends Component {
   
    render(){
        return(
           <Switch>
               <Route  exact path='/' component = {Home} />
               <Route   path='/blog' component = {Blog} />
               <Route  path='/pricing' component = {Pricing} />
               <Route  path='/contact' component = {Contact} />
               <Route  path='/login' component = {Login} />
               <Redirect from='/logout' to='/login'/>
               <Route component={Home} />
           </Switch>
        )
    }

}

export default Main;

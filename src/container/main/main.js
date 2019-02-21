import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './main.module.css'

import Home from '../../component/home/home'
import Blog from '../../component/blog/blog'
import Pricing from '../../component/pricing/pricing';
import Contact from '../../component/contact/contact'
import Login from '../../component/login/login';
import Auth from '../../component/auth/auth'

class Main extends Component {
   
    render(){
        return(
           <Switch>
               <Route  exact path='/' component = {Home} />
               <Auth   path='/blog' component = {Blog} />
               <Auth   path='/pricing' component = {Pricing} />
               <Auth   path='/contact' component = {Contact} />
               <Route  path='/login' component = {Login} />
               <Route  component={Home} />
           </Switch>
        )
    }

}

export default Main;

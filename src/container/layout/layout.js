
import React, {Component} from 'react';
import Aux from '../../hoc/hoc';
import classes from './layout.module.css';

import Header from '../header/header'
import Main from '../main/main';
import Footer from '../footer/footer';

class Layout extends Component {
    render(){
        return (
           <Aux>
            <Header />
            <Main />
            <Footer />
           </Aux>
        )
    }
}

export default Layout;
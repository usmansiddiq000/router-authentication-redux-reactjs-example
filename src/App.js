import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './hoc/hoc'
import Layout from './container/layout/layout'

class App extends Component {
  render() {
    return (
  <Aux>
  <Layout></Layout>
 </Aux>
    );
  }
}

export default App;

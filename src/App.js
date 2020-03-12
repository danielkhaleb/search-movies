import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import TestRoute from './pages/testRoute/TestRoute'
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/testroute" component={TestRoute}></Route>
      </HashRouter>
    );
  }
}

export default App;

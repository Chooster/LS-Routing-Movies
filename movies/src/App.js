import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Movies } from './components';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/movies" component={Home}/>
        <Route path="/movies/:id" component={Movies}/>
      </div>
    );
  }
}

export default App;

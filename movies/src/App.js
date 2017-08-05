import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Movie, newMovie } from './components';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/movies/:id" component={Movie}/>
        <Route exact path="/new_movie" component={newMovie}/>
        <Route component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default App;

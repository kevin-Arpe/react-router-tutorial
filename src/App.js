import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { Home, About, User } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/user">User</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/user' component={ User } />
            <Route path='/'>Not found 404</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
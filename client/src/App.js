import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import Main from './Main';
import Documentation from './Documentation';

function App() {
  return (
    <Router>
        <div className='App'>
          <div>
            <Route exact path="/" exact component={Main} />
            <Route exact path="/fibonacci" exact component={Fib} />
            <Route exact path="/documentation" exact component={Documentation} />
          </div>
        </div>
      </Router>
  );
}

export default App;

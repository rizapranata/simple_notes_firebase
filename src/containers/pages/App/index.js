import React from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';

function App() {
  return (
   <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;

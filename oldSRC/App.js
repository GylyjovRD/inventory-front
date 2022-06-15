import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/product/ProductsPage';
import TransferPage from './pages/transfer/TransferPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/transfer">
            <TransferPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

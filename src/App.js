import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skeleton from './structure';
import SingleConversion from './single-conversion';
import './App.css';
import MainCurrencyconversion from './main-component';


const App = () => {
  return (
    <Router>
      <Skeleton>
        <Route path='/' exact component={SingleConversion} />
        <Route path='/' component={MainCurrencyconversion} />
      </Skeleton>
    </Router>

  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skeleton from './structure';
import SingleConversion from './single-conversion';
import './App.css';
import MainComponent from './main-component';


const App = () => {
  return (
    <Router>
      <Skeleton>
        <Route path='/' exact component={SingleConversion} />
        <Route path='/' component={MainComponent} />
      </Skeleton>
    </Router>

  )
}

export default App;

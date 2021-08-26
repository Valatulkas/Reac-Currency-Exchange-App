import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Skeleton from './structure';
import SingleConversion from './single-conversion';
import './App.css';


const App = () => {
  return (
    <Router>
      <Skeleton>
      </Skeleton>
    </Router>

  )
}

export default App;

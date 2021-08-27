import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skeleton from './structure';
import ConversionComponent from './Conversion-Component';
import './App.css';
import MainComponent from './main-component';


const App = () => {
  return (
    <Router>
      <Skeleton>
        <Route path='/' exact component={ConversionComponent} />
        <Route path='/' component={MainComponent} />
      </Skeleton>
    </Router>

  )
}
export default App;

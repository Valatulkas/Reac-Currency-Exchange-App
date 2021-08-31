import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skeleton from './structure';
import './App.css';
import MainComponent from './main-component';
import SingleConversion from './Conversion-Component';


const App = () => {
  return (
    <Router>
      <Skeleton>
        <Route path='/' exact component={SingleConversion} />
        <hr className='my-5'/>
        <Route path='/' component={MainComponent} />
      </Skeleton>
    </Router>

  )
}
export default App;

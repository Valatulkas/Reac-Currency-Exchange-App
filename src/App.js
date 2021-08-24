import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Skeleton from './structure';
import SingleConversion from './single-conversion';
import './App.css';

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Contact = () => {
  return <h2>Contact</h2>
}

const NotFound = () => {
  return <h2>404 Not Found</h2>
}

const App = () => {
  return (
    <Router>
      <Skeleton>
      </Skeleton>
    </Router>

  )
}

export default App;

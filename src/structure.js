import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SingleConversion from './single-conversion';
    
const Skeleton = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className='container'>
                    <div className="row">
                        <img src='' alt='clam-photo'/>
                    </div>
                    <div className="row clams">
                        <span className='h1'>Clam Conversion</span>
                    </div>
                    <div className="row purple">
                        <a href=' ' alt='refresh-button'>
                            <img src='' alt='refresh-button'/>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <SingleConversion></SingleConversion>
                <h1 className='main-heading'>Main Currency Conversion Content</h1>
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            <a href=''>
                                <img src='' alt='github'/>
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href=''>jfergie93@gmail.com</a>
                        </div>
                        <div className="col-4 text-center">
                            <img src='' alt='chess'/>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Skeleton;
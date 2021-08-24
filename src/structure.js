import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SingleConversion from './single-conversion';
    
const Skeleton = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className='container'>
                    <div className="row">
                        <i class="fas fa-search-dollar fa-4x"></i>
                    </div>
                    <div className="row clams">
                        <span className='h1'>Smart Wallet</span>
                    </div>
                    <div className="row purple">
                        <a href=' ' alt='refresh-button'>
                            <i class="fas fa-sync-alt fa-3x"></i>
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
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href=''>
                                <i class="fas fa-paper-plane fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href=''>
                                <i class="fas fa-chess fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Skeleton;
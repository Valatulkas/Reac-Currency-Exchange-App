import React from 'react';
import { NavLink } from 'react-router-dom';


const Skeleton = (props) => {
    
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className='container' id='logo'>
                        <div className='col-12 col-md-3' id='onevone'>
                            <button className='btn btn-success'>
                                <a aria-current="page" class="active d-flex align-items-center" href="/">
                                
                                
                                <i className="fas fa-money-bill-alt fa-3x mr-2" aria-hidden="true"></i>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <i class="fas fa-exchange-alt arrows" aria-hidden="true"></i>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <i className="far fa-money-bill-alt fa-3x ml-4"  aria-hidden="true"></i>
                                
                                </a>
                            </button>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h1 className='clams'>Smart Wallet</h1>
                        </div>
                        <div className='col-12 col-md-3' id="all-currency">
                            <button className='btn btn-success'>
                                <NavLink to='/main-component'>
                                        <i className="fas fa-globe-americas purple fa-3x"></i>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <i class="fas fa-coins fa-3x">
                                        </i>
                                </NavLink>
                            </button>
                        </div>
                </div>
            </nav>
            <div className='container' id='main-content'>
                {props.children}
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 text-center py-3 hmm'>
                            <a href='https://github.com/Valatulkas'>
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center py-3 hmm">
                            <a href="mailto:jfergie93@gmail.com">
                                <i className="fas fa-paper-plane fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center py-3 hmm">
                            <a href='https://www.chess.com'>
                                <i className="fas fa-chess fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Skeleton;
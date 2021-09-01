import React from 'react';
import { NavLink } from 'react-router-dom';
/*
import CircleType from "circletype";
*/

const Skeleton = (props) => {
    
    return (
        /*
        new CircleType(document.getElementById('reverse-arc'))
            .dir(-1)
            .radius(384),
        */
        <React.Fragment>
            <nav className="navbar">
                <div className='container' id='logo'>
                        <div className='col-12 col-md-3' id='onevone'>
                            <i className="fas fa-money-bill-alt fa-2x"></i>
                            <i class="fas fa-sync-alt fa-2x purple px-4"></i>
                            <i className="far fa-money-bill-alt fa-2x"></i>
                            <br/>
                            <button className='btn btn-success'>
                                <NavLink to='/'><small>CURRENCY TO CURRENCY</small></NavLink>
                            </button>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h1 className='clams'>Smart Wallet</h1>
                        </div>
                        <div className='col-12 col-md-3' id="all-currency">
                            <i class="fas fa-globe-americas purple fa-3x"></i>
                            <br/>
                            <button className='btn btn-success'>
                                <NavLink to='/main-component'><small id='reverse-arc'>ALL CURRENCIES</small></NavLink>
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
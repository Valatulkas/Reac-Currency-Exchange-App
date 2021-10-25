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
                                <h6 className='label pt-2'><small>(ONE TO ONE)</small></h6>
                            </button>
                            
                        </div>
                        <div className='col-12 col-md-6'>
                            <h1 className='clams'>
                                S<span className='spacing'>&nbsp;</span>
                                M<span className='spacing'>&nbsp;</span>
                                A<span className='spacing'>&nbsp;</span>
                                R<span className='spacing'>&nbsp;</span>
                                T 
                                <br/> 
                                W<span className='spacing'>&nbsp;</span>
                                A<span className='spacing'>&nbsp;</span>
                                L<span className='spacing'>&nbsp;</span>
                                L<span className='spacing'>&nbsp;</span>
                                E<span className='spacing'>&nbsp;</span>
                                T
                                </h1>
                        </div>
                        <div className='col-12 col-md-3' id="all-currency">
                            <button className='btn btn-success'>
                                <NavLink to='/main-component'>
                                        <i className="fas fa-globe-americas purple fa-3x"></i>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <i class="fas fa-coins fa-3x">
                                        </i>
                                </NavLink>
                                <h6 className='label pt-2'><small>(ALL CURRENCIES)</small></h6>
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
                        <div className='col-4 text-center py-4 hmm'>
                            <div className='reveal mb-3'>
                               GIT&nbsp;
                            </div>
                            <a href='https://github.com/Valatulkas'>
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <div className='reveal mb-3'>
                                HUB
                            </div>
                        </div>
                        <div className="col-4 text-center py-4 hmm">
                            <div className='reveal mb-3'>
                                REACH
                            </div>
                            <a href="mailto:jfergie93@gmail.com">
                                <i className="fas fa-paper-plane fa-3x"></i>
                            </a>
                            <div className='reveal mb-3'>
                                &nbsp;&nbsp;OUT
                            </div>
                        </div>
                        <div className="col-4 text-center py-4 hmm">
                            <div className='reveal pb-3'>
                               PLAY&nbsp;
                            </div>
                            <a href='https://www.chess.com'>
                                <i className="fas fa-chess fa-3x"></i>
                            </a>
                            <div className='reveal'>
                                &nbsp;CHESS
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Skeleton;
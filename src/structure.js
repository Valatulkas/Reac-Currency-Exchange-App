import React from 'react';
    
const Skeleton = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className='container'>
                    <div className='row px-4 mx-4' id='logo'>
                        <i class="fas fa-money-bill-alt fa-3x"></i>
                    </div>
                    <div className='row px-4 mx-4' id='logo'>
                        <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                    </div>
                    <div className='row'>
                        <h1 className='clams'>Smart <i class="fas fa-wallet"></i> Wallet</h1>
                    </div>
                    <div className='row px-4 mx-4' id='logo'>
                        <i class="fas fa-long-arrow-alt-right fa-2x"></i>
                    </div>
                    <div className='row px-4 mx-4' id='logo'>
                        <i class="far fa-money-bill-alt fa-3x"></i>
                    </div>
                </div>
            </nav>
            <div className='container' id='main-content'>
                {props.children}
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 text-center py-3'>
                            <a href='https://github.com/Valatulkas'>
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center py-3">
                            <a href="mailto:jfergie93@gmail.com">
                                <i className="fas fa-paper-plane fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-4 text-center py-3">
                            <a href='https://www.chess.com/home'>
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
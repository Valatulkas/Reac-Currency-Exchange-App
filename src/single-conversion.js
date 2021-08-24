import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SingleConversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rate: 0.89,
          usd: 1,
          euro: 1 * 0.89,
        };
    
        this.handleUsdChange = this.handleUsdChange.bind(this);
        this.handleEuroChange = this.handleEuroChange.bind(this);
    }
    toUsd(amount, rate) {
        return amount * (1 / rate);
    }
    toEuro(amount, rate) {
        return amount * rate;
    }
    
    convert(amount, rate, equation) {
        console.log(typeof amount);
        const input = parseFloat(amount);
        if (Number.isNaN(input)) {
          return '';
        }
        return equation(input, rate).toFixed(3);
    }
    
    handleUsdChange(event) {
        const euro = this.convert(event.target.value, this.state.rate, this.toEuro);
        this.setState({
          usd: event.target.value,
          euro
        });
    }
    
    handleEuroChange(event) {
        const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
        this.setState({
          euro: event.target.value,
          usd
        });
    }
    render () {
        const { rate, usd, euro } = this.state;
        return (
            <React.Fragment>
                <div className='container' id="currency-conversion">
                    <div className='row'>
                        <div className='col-3'></div>
                            <div className=" col-6 border py-4 rounded my-2 text-center" style={{backgroundColor: 'lightgrey'}}>
                                <h3 className="mb-2" style={{color: 'darkblue'}}>Single Currency Converter</h3>
                                <h4>USD 1 : {rate} EURO</h4>
                            </div>
                        <div className='col-3'></div>
                    </div>
                         
                    <div className="row text-center">
                        <div className='col-3'></div>
                        <div className="col-6 border rounded text-center my-2 py-4"  style={{backgroundColor: 'lightgrey'}}>
                            <input value={usd} onChange={this.handleUsdChange} type="number" />
                            <span className="mr-1" style={{color: 'darkblue'}}>USD</span>
                            <span className="mx-3">=</span>
                            <input value={euro} onChange={this.handleEuroChange} type="number" />
                            <span className="ml-1" style={{color: 'darkblue'}}>EURO</span>
                        </div>
                        <div className='col-3'></div>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        )
    }

}

export default SingleConversion;
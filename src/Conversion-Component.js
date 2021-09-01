import React from 'react';
import currencies from './currencies';
import { checkStatus, json } from './utils';
/*
import CircleType from "circletype";
*/

class SingleConversion extends React.Component {
    
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);

    this.state = {
      rate: 0,
      baseAcronym: params.get('base') || 'USD',
      baseValue: 0,
      quoteAcronym: params.get('quote') || 'DKK',
      quoteValue: 0,
      loading: false,
    };

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { baseAcronym, quoteAcronym } = this.state;
    this.getRate(baseAcronym, quoteAcronym);
  }

  getRate = (base, quote) => {
    this.setState({ loading: true });
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}&to=${quote}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }

        const rate = data.rates[quote];

        this.setState({
          rate,
          baseValue: 1,
          quoteValue: Number((1 * rate).toFixed(3)),
          loading: false,
        });
      })
      .catch(error => console.error(error.message));
  }

  toBase(amount, rate) {
    return amount * (1 / rate);
  }

  toQuote(amount, rate) {
    return amount * rate;
  }

  convert(amount, rate, equation) {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }

  changeBaseAcronym = (event) => {
    const baseAcronym = event.target.value;
    this.setState({ baseAcronym });
    this.getRate(baseAcronym, this.state.quoteAcronym);
  }

  changeBaseValue = (event) => {
    const quoteValue = this.convert(event.target.value, this.state.rate, this.toQuote);
    this.setState({
      baseValue: event.target.value,
      quoteValue,
    });
  }

  changeQuoteAcronym = (event) => {
    const quoteAcronym = event.target.value;
    this.setState({ quoteAcronym });
    this.getRate(this.state.baseAcronym, quoteAcronym);
  }

  changeQuoteValue = (event) => {
    const baseValue = this.convert(event.target.value, this.state.rate, this.toBase);
    this.setState({
      quoteValue: event.target.value,
      baseValue,
    });
  }

  render() {
    const { rate, baseAcronym, baseValue, quoteAcronym, quoteValue, loading } = this.state;

    const currencyList = Object.keys(currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym}</option>);
        

    return (
        /*
        new CircleType(document.getElementById('arc'))
            .radius(384),
        */
        <React.Fragment>
            <div className='m-5'>
                <div className='text-center row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 ' id="single-title">
                        <h1 className='pt-4' style={{color: 'antiquewhite'}} id="arc">
                            <b>CONVERT     YOUR    CA$H</b>     
                        </h1>
                        <br/>
                        <h3 id="one-on-one" style={{color: 'antiquewhite'}} className='py-4'>
                            1 {currencies[baseAcronym].name} {currencies[baseAcronym].flag} 
                            <br/> = <br/> 
                            {rate.toFixed(2)} {currencies[quoteAcronym].name}s {currencies[quoteAcronym].flag}
                        </h3>
                    </div>
                    <div className='col-0 col-md-2'></div>  
                </div>
                <form>
                <div className='row mt-0 pt-0'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 text-center form-group pt-3 pb-4 px-5' id="second-title">
                        <div>
                            <select value={baseAcronym} onChange={this.changeBaseAcronym} className='form-control my-2' disabled={loading}>
                                {currencyList}
                            </select>
                            <div className='input-group' style={{color: 'antiquewhite'}}>
                                <div className='input-group-prepend mr-2'>
                                    <div className='input-group-text'>
                                        <h3>{currencies[baseAcronym].flag}</h3> - {currencies[baseAcronym].symbol}
                                    </div>
                                </div>
                                <input id='base-currency' className='form-control ml-4' value={baseValue} onChange={this.changeBaseValue} type='number' />
                            </div>
                            <h4 style={{color: 'antiquewhite'}}>{currencies[baseAcronym].name}s</h4>
                        </div>
                        <span className="mx-3" style={{color: 'antiquewhite'}}>=</span>
                        <div>
                            <select value={quoteAcronym} onChange={this.changeQuoteAcronym} className='form-control mb-2' disabled={loading}>
                                {currencyList}
                            </select>
                            <div className='input-group' style={{color: 'antiquewhite'}}>
                                <div className='input-group-prepend mr-2'>
                                    <div className='input-group-text'>
                                        <h3>{currencies[quoteAcronym].flag}</h3> - {currencies[quoteAcronym].symbol} 
                                    </div>
                                </div>
                                <input id='quote-currency' className='form-control' value={quoteValue} onChange={this.changeQuoteValue} type='number' />
                            </div>
                            <h4 style={{color: 'antiquewhite'}} className='pb-5'>{currencies[quoteAcronym].name}s</h4>
                        </div>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
            </form>
            </div>
        </React.Fragment>
    )
  }
}

export default SingleConversion
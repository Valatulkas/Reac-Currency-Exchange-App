import React from 'react';
import currencies from './currencies';
import { checkStatus, json } from './utils';

class AllCurrencies extends React.Component {
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
        <React.Fragment>
            <div>
                <div className='col-3'></div>
                <h3 className='col-6 border py-4 my-3 text-center align-self-center justify-self-center' style={{backgroundColor: 'lightgrey'}}><b>Convert Your Currencies</b><br/>{baseAcronym} to {quoteAcronym} = {rate.toFixed(2)} {currencies[quoteAcronym].name}</h3>
                <div className='col-3'></div>
            </div>
            <form>
                <div className='row '>
                    <div className='col-md-2 honeydew'></div>
                    <div className='col-md-8 border py-4 my-2 rounded text-center form-group' style={{backgroundColor: 'lightgrey'}}>
                        <div id="component-border">
                            <select value={baseAcronym} onChange={this.changeBaseAcronym} className='form-control' disabled={loading}>
                                {currencyList}
                            </select>
                            <div className='inputs'>
                                <div className='inputs-text'>{currencies[baseAcronym].symbol}</div>
                            </div>
                            <input id='base-currency' className='form-control' value={baseValue} onChange={this.changeBaseValue} type='number' />
                            <small>{currencies[baseAcronym].name}</small>
                        </div>
                        <span className="mx-3">=</span>
                        <div id='component-border'>
                            <select value={quoteAcronym} onChange={this.changeQuoteAcronym} className='form-control' disabled={loading}>
                                {currencyList}
                            </select>
                            <div className='inputs'>
                                <div className='inputs-text'>{currencies[quoteAcronym].symbol}</div>
                            </div>
                            <input id='quote-currency' className='form-control' value={quoteValue} onChange={this.changeQuoteValue} type='number' />
                            <small>{currencies[quoteAcronym].name}</small>
                        </div>
                    </div>
                    <div className='col-md-2 honeydew'></div>
                </div>
            </form>
            <canvas ref={this.chartRef} />
        </React.Fragment>
    )
  }
}

export default AllCurrencies
import React from 'react';
import Chart from 'chart.js/auto';
import currencies from './currencies';
import { checkStatus, json } from './utils';

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
    this.getHistoricalRates(baseAcronym, quoteAcronym);
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
  getHistoricalRates = (base, quote) => {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

    fetch(`https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from=${base}&to=${quote}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }

        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map(rate => rate[quote]);
        const chartLabel = `${base}/${quote}`;
        this.buildChart(chartLabels, chartData, chartLabel);
      })
      .catch(error => console.error(error.message));
  }

  buildChart = (labels, data, label) => {
    const chartRef = this.chartRef.current.getContext("2d");

    if (typeof this.chart !== "undefined") {
      this.chart.destroy();
    }
    
    this.chart = new Chart(this.chartRef.current.getContext("2d"), {
      
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: false,
            tension: 0,
          }
        ]
      },
      options: {
        responsive: true,
        borderColor: "FAEBD7",
        backgroundColor: "#FAEBD7",
      }
    })
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
    this.getHistoricalRates(baseAcronym, this.state.quoteAcronym);
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
    this.getHistoricalRates(this.state.baseAcronym, quoteAcronym);
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
            
                <div className='text-center container'>
                <div className='row'>
                      <div className='col-0 col-md-2'></div>
                      <div className='col-12 col-md-8 p-3 my-5 rounded' id="single-title">
                          <h2 className='mb-3' style={{color: 'antiquewhite'}} id="arc">
                              <b>C u r r e n c y &nbsp; C o n v e r s i o n</b>     
                          </h2>
                          <br/>
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
                          <span className="mx-3" style={{color: 'antiquewhite'}}><i class="fas fa-chevron-down fa-2x"></i></span>
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
                              <h4 style={{color: 'antiquewhite'}}>{currencies[quoteAcronym].name}s</h4>
                          </div>
                          <br />
                          <div className='row'>
                            <div className='col-12 col-md-5'>
                              <h3 id="one-on-one" style={{color: 'antiquewhite'}} className='py-4'>
                              1 {currencies[baseAcronym].name} {currencies[baseAcronym].flag}
                              </h3>
                            </div>
                            <div className='col-12 col-md-2 py-4' id="onevone">
                            <span className="mx-3" style={{color: 'antiquewhite'}}><i class="fas fa-equals fa-2x"></i></span>
                            </div>
                            <div className='col-12 col-md-5'>
                              <h3 id="one-on-one" style={{color: 'antiquewhite'}} className='py-4'>
                                {rate.toFixed(2)} {currencies[quoteAcronym].name}s {currencies[quoteAcronym].flag}
                              </h3>
                            </div>
                          </div>
                         
                      </div>
                      <div className='col-0 col-md-2'></div> 
                      </div> 
                </div>
                
                
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'></div>
                <div className="col-md-6 p-3 px-5 my-3 rounded" id="chart-head">
                    <h2 style={{color: 'antiquewhite'}}>Rate History</h2>
                </div>
                <div className='col-md-3'></div>
               
                <div className='col-12  mb-5'> 
                  <canvas id='graph'ref={this.chartRef} />
                </div>
              </div>
            </div>
            
        </React.Fragment>
    )
  }
}

export default SingleConversion
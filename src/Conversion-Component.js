import React from 'react';
import currencies from './currencies';
import { checkStatus, json } from './utils';

class ConversionComponent extends React.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(props.location.search);
        this.state = {
            rate: 0,
            baseAcronym: params.get('base') || 'USD',
            baseValue: 0,
            quoteAcronym: params.get('quote') || 'DKK',
            loading: false,
        };
        this.chartREF = REACT.createRef();
    }
    componentDidMount () {
        const { baseAcronym, quoteAcronym} = this.state;
        this.getRate(baseAcronym, quoteAcronym);
    }
    getRate = (base, quote) => {
        this.setState({ loading: true });
        fetch('https://altexchangerateapi.herokuapp.com/latest?from=${base}&to=${quote}')
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
                    quoteValue: Number((1 * rate).toFixed(2)),
                    loading: false,
                });
            })
            .catch(error => console.error(error.message));
    }
}
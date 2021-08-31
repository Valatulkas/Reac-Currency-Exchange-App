import React from 'react';
import { Link } from 'react-router-dom';

const CurrencyTable = (props) => {
    const { base, rates } = props;
    if (!rates) {
        return null;
    }
    return (
        
        <table className='table table-sm mb-5' id='chart'>
            <thead> 
                <tr>
                    <th style={{color: 'antiquewhite'}}>Currency</th>
                    <th style={{color: 'antiquewhite'}}>1.00 {base}</th>
                </tr>

                
            </thead>
            <tbody>
                {rates.map(currency => 
                    <tr key={currency.acronym}>
                        <td style={{color: 'antiquewhite'}} >{currency.name}</td>
                        <td ><Link to={`/conversion-component?base=${base}&quote=${currency.acronym}`} style={{color: 'antiquewhite'}}>{currency.rate.toFixed(2)} {currency.acronym}</Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default CurrencyTable
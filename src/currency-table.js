import React from 'react';
import { Link } from 'react-router-dom';

const CurrencyTable = (props) => {
    const { base, rates } = props;
    if (!rates) {
        return null;
    }
    return (
        <table className='table table-md'>
            <thead>
                <tr>
                    <th scope='col'>Currency</th>
                    <th scope='col'>1.00 {base}</th>
                </tr>
            </thead>
            <tbody>
                {rates.map(currency => 
                    <tr key={currency.acronym}>
                        
                            <td>{currency.name}</td>
                            <td><Link to={`/conversion-component?base=${base}&quote=${currency.acronym}`}>{currency.rate.toFixed(2)} {currency.acronym}</Link></td>
                       
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default CurrencyTable
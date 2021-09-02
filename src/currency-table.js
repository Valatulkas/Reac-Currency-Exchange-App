import React from 'react';

const CurrencyTable = (props) => {
    const { base, rates } = props;
    if (!rates) {
        return null;
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-0 col-md-2'></div>
                <div className='col-md-8'>
                    <table className='table mb-5' id='chart'>
                        <thead> 
                            
                                <tr>
                                    <th style={{color: 'antiquewhite'}}><h3><b>Currency</b></h3></th>
                                    
                                    {rates.some(currency => 
                                        <th key={currency.acronym}><b>{currency.flag}</b></th>
                                    )}

                                    <th style={{color: 'antiquewhite'}}><h3><b>1.00 {base}</b></h3></th>
                                </tr>
                        </thead>
                        <tbody>
                            {rates.map(currency => 
                                <tr key={currency.acronym}>
                                    <td style={{color: 'antiquewhite'}}>
                                        <b>
                                            {currency.name} 
                                        </b>
                                    </td>
                                    <td><h3>{currency.flag}</h3></td>
                                    <td >
                                        
                                            <b style={{color: 'antiquewhite'}}>{currency.rate.toFixed(2)} {currency.acronym}</b>
                                        
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='col-0 col-md-2'></div>
            </div>
        </div>
    )
}

export default CurrencyTable
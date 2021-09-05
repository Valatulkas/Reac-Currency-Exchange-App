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
                                    <th><h3><b style={{color: 'antiquewhite'}}>Currency</b></h3></th>
                                    
                                    <th><h3 style={{color: 'antiquewhite'}}><i class="fab fa-font-awesome-flag"></i></h3></th>

                                    <th><h3><b style={{color: 'antiquewhite'}}>1.00 {base}</b></h3></th>
                                </tr>
                        </thead>
                        <tbody>
                            {rates.map(currency => 
                                <tr key={currency.acronym}>
                                    <td>
                                        <b style={{color: 'antiquewhite'}}>
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
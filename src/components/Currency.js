import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('Currency (£ Pound)');
  
  const handleSelect = (currencySymbol) => {
    //let prefix = "Currency"
    //setSelectedCurrency(prefix + ' (' + currency + ')');
    dispatch({ type: 'CHG_CURRENCY', payload: currencySymbol });
    setIsOpen(false);
  };

  return (
    <div className={isOpen ? "dropdown show" : "dropdown"}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: '#93E49A', border: 'none'}}
      >
       {selectedCurrency}
      </button>
      <div className={isOpen ? "dropdown-menu show" : "dropdown-menu"} 
        aria-labelledby="dropdownMenuButton"
        style={{border: '2px solid black', marginTop: '5px', backgroundColor: '#93E49A'}}
      >
        <a className="dropdown-item" onClick={() => handleSelect('$')} href="#">$ Dollar</a>
        <a className="dropdown-item" onClick={() => handleSelect('£')} href="#">£ Pound</a>
        <a className="dropdown-item" onClick={() => handleSelect('€')} href="#">€ Euro</a>
        <a className="dropdown-item" onClick={() => handleSelect('₹')} href="#">₹ Rupee</a>
        
      </div>
    </div>
  );
};

export default Currency;

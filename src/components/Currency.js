import React, { useState } from 'react';

const Currency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('Currency (£ Pound)');
  
  const handleSelect = (currency) => {
    let prefix = "Currency"
    setSelectedCurrency(prefix + ' (' + currency + ')');
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
        <a className="dropdown-item" onClick={() => handleSelect('$ Dollar')} href="#">$ Dollar</a>
        <a className="dropdown-item" onClick={() => handleSelect('£ Pound')} href="#">£ Pound</a>
        <a className="dropdown-item" onClick={() => handleSelect('€ Euro')} href="#">€ Euro</a>
        <a className="dropdown-item" onClick={() => handleSelect('£ Rupee')} href="#">₹ Rupee</a>
        
      </div>
    </div>
  );
};

export default Currency;

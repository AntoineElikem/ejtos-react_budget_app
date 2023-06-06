import React, { useState } from 'react';

const Currency = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "dropdown show" : "dropdown"}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: '#93E49A', border: 'none'}}
      >
        Dropdown button
      </button>
      <div className={isOpen ? "dropdown-menu show" : "dropdown-menu"} 
        aria-labelledby="dropdownMenuButton"
        style={{border: '2px solid black', marginTop: '5px', backgroundColor: '#93E49A'}}
      >
        <a className="dropdown-item" href="#">£ Pound</a>
        <a className="dropdown-item" href="#">€ Euro</a>
        <a className="dropdown-item" href="#">₹ Rupee</a>
        <a className="dropdown-item" href="#">$ Dollar</a>
      </div>
    </div>
  );
};

export default Currency;

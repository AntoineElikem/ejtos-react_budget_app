import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {useRef, useEffect} from 'react';
 
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const spending = budget;
    const inputRef = useRef(null);
    //document.getElementById("budget_input").value = budget;

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.value = spending;
        }
      }, []);

    const handleBudjetChange = (event) => {
        alert(`spending is ${spending}`);
        let newValue = event.target.value;
        
        if (newValue < spending){
            alert(`You cannot reduce the budget value lower than the spending`);
        }
       
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
            ref={ inputRef }
            type="number" 
            min="10"
            step="10"
            onChange={handleBudjetChange} />
        </div>
    );
};
export default Budget;
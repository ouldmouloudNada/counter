import React, { useState } from 'react';
import icon from '../../assets/Featured icon.png';
import './Counter.css';
const Counter = () => {
  const [seatCount, setSeatCount] = useState(0);
  const pricePerSeat = 10; 

  const handleIncrement = () => {
    setSeatCount(seatCount + 1);
  };

  const handleDecrement = () => {
    if (seatCount > 0) {
      setSeatCount(seatCount - 1);
    }
  };
  const handleReset = () => {
    setSeatCount(0);
  };

  const totalPrice = seatCount * pricePerSeat;

  return (
    <div className='container'>
      <div className='header' >
        <div className="image">
            <img src={icon} alt='Placeholder' />
        </div>
        <div className="title">
          <h2>Purchase seats</h2>
          <p>Select how many seats you need.</p>
        </div>
      </div>

      <div className='seatSelection'>
        <button onClick={handleDecrement} className='btn' >-</button>
        <div className='seatCount'>{seatCount}</div>
        <button onClick={handleIncrement} className='btn' >+</button>
      </div>

      <div className='priceDetails'>
        <div className="up">
          <p className='price'>Price per seat</p>
          <p className='number'>${pricePerSeat}</p>
        </div>
        
        <div className="down">
          <p className='price'>Total</p>
          <p className='number'>${totalPrice}</p>
        </div>
       
      </div>

     

      <div className='actions'>
        <button className='cancelButton' onClick={handleReset}>Cancel</button>
        <button className='confirmButton'>Confirm</button>
      </div>
    </div>
  );
};

export default Counter
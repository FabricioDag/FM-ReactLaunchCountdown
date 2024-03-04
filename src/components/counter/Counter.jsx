import React from 'react';
import './counter.css'
const Counter = ({ title, number }) => {
  return (

    <div className="timerBox">
      <div className="calendarBox">
        <div className="topPart"></div>
        <div className="botPart"></div>
        <h1>{number > 9 ? number : '0' + number}</h1>
      </div>

      <p>{title}</p>
    </div>
  );
};

export default Counter;

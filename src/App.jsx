import React from 'react';
import './App.css';
import Title from './components/title/Title.jsx';
import Counter from './components/counter/Counter.jsx';

import useCountdown from './hooks/useCountdown.jsx';

function App() {
  const [day, hour, minute, second] = useCountdown('2024,5,21');

  return (
    <div className="App">
      <div className="content">
        <Title title="We're launching soon" />

        <div className="countdownContainer">
          <Counter title={day != 1 ? 'DAYS' : 'DAY'} number={day} />
          <Counter title={hour != 1 ? 'HOURS' : 'HOUR'} number={hour} />
          <Counter title={minute != 1 ? 'MINUTES' : 'MINUTE'} number={minute} />
          <Counter title="SECONDS" number={second} />
        </div>
      </div>

      <div className="socials">
        <i>
          <img src="../src/images/icon-facebook.svg" alt="" />
        </i>

        <i>
          <img src="../src/images/icon-pinterest.svg" alt="" />
        </i>

        <i>
          <img src="../src/images/icon-instagram.svg" alt="" />
        </i>
      </div>
    </div>
  );
}

export default App;

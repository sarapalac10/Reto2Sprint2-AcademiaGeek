import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { GrFacebook, GrPinterest, GrInstagram } from "react-icons/gr";


function App() {
  const [timerDay, setTimerDay] = useState('00');
  const [timerHour, setTimerHour] = useState('00');
  const [timerMinute, setTimerMinute] = useState('00');
  const [timerSecond, setTimerSecond] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Dec 01, 2022 00:00:00').getTime();
    interval = setInterval(()=> {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if(distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDay(days)
        setTimerHour(hours)
        setTimerMinute(minutes)
        setTimerSecond(seconds)
      }
      
    }, 1000)

  }

    useEffect(()=> {
      const someref = interval.current
      startTimer()
      return ()=> {
        clearInterval(someref)
      }
    }, [])

    return (
    <div className="App">
      <section className='timer-container'>
          <section className='timer'>
            <div>
              <h1>We're launching soon</h1>
            </div>
            <div>
              <section>
                <p className='number'>{timerDay}</p>
                <p><small>Days</small></p>
              </section>
              <span>:</span>
              <section>
                <p className='number'>{timerHour}</p>
                <p><small>Hours</small></p>
              </section>
              <span>:</span>
              <section>
                <p className='number'>{timerMinute}</p>
                <p><small>Minutes</small></p>
              </section>
              <span>:</span>
              <section>
                <p className='number'>{timerSecond}</p>
                <p><small>Seconds</small></p>
              </section>
            </div>
          </section>
          <section className='footer'>
            <div className='logos'>
                <GrFacebook className="icoFa" />
                <GrPinterest className="icoFa" />
                <GrInstagram className="icoFa" />               
            </div>
          </section>
      </section>
    </div>
  );
}


export default App;



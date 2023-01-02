import React, { useState, useEffect } from 'react';

function Clockcmp() {
  const [time, setTime] = useState();
  useEffect(() => {
   const timer = setInterval(() => {
      setTime();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='wrapper'>
      <div className="clockyear" style={{ fontFamily: 'alarm_clock' }}>
        {time.format('YYYY-MM-DD')}
      </div>
      <div className="doclock"> {time.format('HH:mm:ss')}</div>
    </div>
  );
}

export default Clockcmp;

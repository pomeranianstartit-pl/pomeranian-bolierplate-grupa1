import { useEffect, useState } from 'react';
import './styles.css'

export const Timer = () => {
  const [count, setCount] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (isRunning) setIsRunning(false);

    if (!isRunning) setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, count]);

  const handleReset = () => {
    setCount(0);

    setIsRunning(false);
  };

  return (
    <div>
      <div className="timercount">{count} sec</div>
      <div className="timerbutton">
        <button className="timerbuttonstart" onClick={handleClick}>
          {isRunning ? 'Stop' : 'Start'}
        </button>

        <button className="timerbuttonrestart" onClick={handleReset}>
          Restart
        </button>
      </div>
    </div>
  );
};

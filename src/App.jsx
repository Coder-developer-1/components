import React, { useState, useEffect } from 'react';
import './App.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const App = () => {
  const [isProgressOn, setIsProgressOn] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isProgressOn) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 10); // Increase progress every 100ms
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isProgressOn]);

  const toggleProgress = () => {
    setIsProgressOn(!isProgressOn);
  };

  return (
    <div className="App">
      <h1>Progress Bar with Toggle</h1>
      <button onClick={toggleProgress} className="toggle-button">
        {isProgressOn ? 'Off' : 'On'}
      </button>
      {isProgressOn && <ProgressBar progress={progress} />}
    </div>
  );
};

export default App;

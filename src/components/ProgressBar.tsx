import { useState, useEffect } from 'react';

export const ProgressBar = () => {
  const [currentSignups, setCurrentSignups] = useState(1450);
  const totalSignups = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 3) + 1;
      setCurrentSignups(prev => Math.min(prev + randomIncrement, totalSignups));
    }, Math.random() * 8000 + 4000);

    return () => clearInterval(interval);
  }, []);

  const percentage = Math.min((currentSignups / totalSignups) * 100, 100);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2 font-semibold">
        <span>{currentSignups.toLocaleString()} / {totalSignups.toLocaleString()} Spots Filled!</span>
        <span>{Math.floor(percentage)}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-4 shadow-inner">
        <div 
          className="progress-bar h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
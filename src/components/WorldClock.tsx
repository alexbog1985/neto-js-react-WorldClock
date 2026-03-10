import { useEffect, useState } from "react";

interface WorldClockProps {
  timeZone: number;
  cityName: string;
  onRemove: () => void;
}

export default function WorldClock( { timeZone, cityName, onRemove}: WorldClockProps ) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="world-clock">
      <h3>{cityName}</h3>
      <div className="clock-time">
        <p>{timeZone} {currentTime.getTime()}</p>
        <button onClick={onRemove}>remove</button>
      </div>
    </div>
  )
}
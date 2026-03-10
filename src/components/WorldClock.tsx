import { useEffect, useState } from "react";

interface WorldClockProps {
  timeZone: number;
  cityName: string;
  onRemove: () => void;
}

function formatTime(date: Date, timezoneOffset: number): string {
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const cityTime = new Date(utc + (3600000 * timezoneOffset));
  return cityTime.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
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
        <p>{formatTime(currentTime, timeZone)}</p>
        <button onClick={onRemove}>remove</button>
      </div>
    </div>
  )
}
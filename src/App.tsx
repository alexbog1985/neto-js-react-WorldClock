import './App.css';
import WorldClockForm from './components/WorldClockForm';
import { useState } from 'react';
import WorldClockList from './components/WorldClockList';

interface Clock {
  id: string;
  cityName: string;
  timeZone: number;
}

function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);

  const addClock = (cityName: string, timeZone: number) => {
    const newClock: Clock = {
      id: Date.now().toString(),
      cityName,
      timeZone
    };
    setClocks(prev => [...prev, newClock]);
  }

  const removeClock = (id:string) => {
    setClocks(prev => prev.filter(clock => clock.id !== id));
  }

  return (
    <>
      <WorldClockForm onAdd={addClock}/>
      <WorldClockList clocks={clocks} onRemove={removeClock} />
    </>
  )
}

export default App

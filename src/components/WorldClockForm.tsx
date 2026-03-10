import { useState } from 'react';

interface WorldClockFormProps {
  onAdd: (cityName: string, timeZone: number) => void;
}

export default function WorldClockForm({ onAdd }: WorldClockFormProps) {
  const [cityName, setCityName] = useState('');
  const [timeZone, setTimeZone] = useState(0);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (cityName.trim()) {
      onAdd(cityName, timeZone);
      setCityName('');
      setTimeZone(0);
    }
  }

  const onChangeCityName = (e: React.ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)
  const onChangeTimeZone = (e: React.ChangeEvent<HTMLInputElement>) => setTimeZone(parseFloat(e.target.value))

  return (
      <form className="watch-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название</label>
          <input 
            type="text"
            value={cityName} 
            onChange={onChangeCityName} 
            required
          />
        </div>
        <div className="form-group">
          <label>Временная зона</label>
          <input 
            type="number"
            value={timeZone}
            onChange={onChangeTimeZone} 
            required 
            />
        </div>
        <button type="submit" className="btn">Добавить</button>
      </form>
    )
  }
import WorldClock from "./WorldClock";

interface Clock {
  id: string;
  timeZone: number;
  cityName: string;
}

interface WorldClockListProps {
  clocks: Clock[];
  onRemove: (id: string) => void;
}

export default function WorldClockList({ clocks, onRemove }: WorldClockListProps) {
  if (clocks.length === 0) {
    return <p>Список пуст</p>;
  }

  return (
    <div className="clocks-list">
      {clocks.map((clock) => (
        <WorldClock
          key={clock.id}
          timeZone={clock.timeZone}
          cityName={clock.cityName}
          onRemove={() => onRemove(clock.id)}
        />
      ))}
    </div>
  )
}
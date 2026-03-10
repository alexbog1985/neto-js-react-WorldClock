import './App.css'
import WorldClockForm from './components/WorldClockForm'
import WorldClock from './components/WorldClock'

function App() {

  const onRemove = () => {}
  const onAdd = (cityName, timeZone) => {console.log(cityName, timeZone)}

  return (
    <>
      <WorldClockForm onAdd={onAdd}/>
      <WorldClock timeZone={3} cityName="Moscow" onRemove={onRemove} />
    </>
  )
}

export default App

import './App.css'
import WorldClockForm from './components/WorldClockForm'
import WorldClock from './components/WorldClock'

function App() {

  const onRemove = () => {}

  return (
    <>
       <WorldClockForm />
      <WorldClock timeZone={0} cityName="Moscow" onRemove={onRemove} />
    </>
  )
}

export default App

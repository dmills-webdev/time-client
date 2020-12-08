import { useState, useEffect } from 'react'

function App() {
  const [ time, setTime ] = useState()

  useEffect(() => {
    getTime()
  }, [])

  async function getTime() {
    fetch('https://timeapi-dmwd.herokuapp.com/', {
      method: 'GET'
    })
    .then( res => res.json() )
    .then( time => setTime(time) )
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button type='button' onClick={getTime}>What time is it?</button>
    </div>
  )
}

export default App

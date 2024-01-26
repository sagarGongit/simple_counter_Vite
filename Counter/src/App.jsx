import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='counter'>
      <h1>Count:{count}</h1>
      <div id="buttons">
        <button onClick={()=>(setCount(count+1))}>INC count</button><button onClick={()=>(setCount(count-1))}>DEC count</button>
      </div>
    </div>
    </>
  )
}

export default App

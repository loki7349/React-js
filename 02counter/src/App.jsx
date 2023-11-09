import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(2)

  // let counter = 2

  const addValue = () => {
    console.log("CLicked", counter);
    // counter = counter +1;
    if(counter <= 19){
      setCounter(counter+1)
    }

  }

  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  //These are in batch won't work as react sees it a a single task
  // const addValue = () => {
  //   setCounter(counter + 1)
  //     console.log(counter)
  //   setCounter(counter + 1)
  //     console.log(counter)
  //   setCounter(counter + 1)
  //     console.log(counter)
  //   setCounter(counter + 1)
  //     console.log(counter)
  // }

  // const addValue = () => {
  //   for(let i=0; i<5; i++){
  //     setCounter(counter + 1)
  //     console.log(counter)
  //   }
  // }

  const addValue = () => {
    setCounter((preVal) => preVal +1 )
    setCounter((preVal) => preVal +1 )
    setCounter((preVal) => preVal +1 )
    setCounter((preVal) => preVal +1 )
  }

  const subValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Testing counter function</h1>
    <h3>Current value of counter is {counter}</h3>
    <button
    onClick={addValue}
    >Add Value</button> {" "}
    <button onClick={subValue}
    >Sub Value</button>
    </>
  )
}

export default App


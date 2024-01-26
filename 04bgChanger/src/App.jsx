import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
      <h1 className='bg-slate-800' >This is our BG changer</h1>
      <div className='fixed flex flex-wrap justify-center
      shadow-lg bg-green-100 bottom-12 inset-x-0 px-2 gap-3'>
        <button onClick={ () => setColor('red')}
        className='outline-none px-4 py-2 
        rounded-full shadow-lg text-black bg-red-500'
        >red</button>
         <button onClick={ () => setColor('blue')}
         className='outline-none px-4 py-2 
        rounded-full shadow-lg text-black bg-blue-500'
        >blue</button>
         <button onClick={ () => setColor('green')}
          className='outline-none px-4 py-2 
        rounded-full shadow-lg text-black bg-green-500'
        >green</button>
      </div>
    </div>
    </>
  )
}

export default App

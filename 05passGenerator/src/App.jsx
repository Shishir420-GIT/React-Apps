import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '~!@#$%^&*()?><-=_+|'

    for(let i=0; i< length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed])

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
    <div className='w-ful max-w-md mx-auto shadow-md rounded-lg 
    px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-4'
    >Sliding Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden'>
      <input 
      type="text" 
      value={password} 
      placeholder='Password'
      className='outline-none w-full py-1 px-3'
      readOnly
      ref={passwordRef}/>

      <button 
      onClick={copyToClipboard}
      className='outline-none bg-blue-700 text-white 
      px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className=' flex-auto'>
      <input 
      type="range"
      min={8}
      max={26}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLength(e.target.value)}
      name=''
      id=''
      />
      <label htmlFor="length">Password Length: {length}</label>
    </div>
    <div >
    <input 
      type="checkbox" 
      defaultChecked ={numAllowed}
      onChange={() => {
        setNumAllowed((prev) => !prev)
      }}
      name="" 
      id="" />
      <label htmlFor="numAllowed">Numbers allowed</label>
      {" "}
      <input 
      type="checkbox" 
      defaultChecked ={charAllowed}
      onChange={() => {
        setCharAllowed((prev) => !prev)
      }}
      name="" 
      id="" />
      <label htmlFor="charAllowed">Special chars allowed</label>
    </div>
    </div>
    </>
  )
}

export default App

import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
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
    >What's your number?</h1>
    <h2 className='text-white text-center my-4'>{number}</h2>
    <div className=' flex-auto'>
      <input 
      type="range"
      min={0}
      max={9999999999}
      value={number}
      className='cursor-pointer'
      onChange={(e) => setNumber(e.target.value)}
      style={{ width: '80%' }}
      name=''
      id=''
      />
      <h3>slide to select</h3>
    </div>
    </div>
    </>
  )
}

export default App

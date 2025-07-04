import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAlloed] = useState(false)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  const passswordGenerated = useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnoprstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (symbolsAllowed) str += "!@#$%^&*()_+"

    for(let i =1; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
 
    setPassword(pass)
    
   }, [length, numberAllowed, symbolsAllowed])

   const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
   } 

   useEffect(() => {
    passswordGenerated()

   }, [length, numberAllowed, symbolsAllowed])

       


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
    <h1>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
       />
       <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setlenght(e.target.value)}
        name=''
        id=''
       />
       <label htmlFor="length">length:{length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
        name=''
        id=''
       />
       <label htmlFor="number">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={symbolsAllowed}
        onChange={() => {
          setSymbolsAlloed((prev) => !prev)
        }}
        name=''
        id=''
       />
       <label htmlFor="charInput">symbol</label>
      </div>

    </div>
   </div>
  )
}

export default App

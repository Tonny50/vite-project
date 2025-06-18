import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroungColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow px-3 py-2 rounded-3xl'>
            <button onClick={() => setcolor('red')} className='outline-none py-1 px-4 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}}>red

            </button>

            <button onClick={() => setcolor('green')} className='outline-none py-4 px-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'green'}}>green

            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

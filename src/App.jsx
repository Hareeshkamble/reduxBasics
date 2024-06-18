import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Counter from './Components/Counter'



function App() {
  let dispatch = useDispatch()
  return (
   <>
<h1 className='bg-red-300 text-4xl '>Redux by piyush agarwal</h1>

<div className='flex flex-col h-screen gap-5 items-center justify-center' >
  <button className='text-2xl font-bold bg-lime-100 p-2 rounded-xl' onClick={(e)=>dispatch({type:"INCREMENT"})}>Increment</button>
<Counter />
  <button className='text-2xl font-bold bg-red-100 p-2 rounded-xl' onClick={(e)=>dispatch({type:"DECREMENT"})}>Decrement</button>

</div>
   </>
  )
}

export default App

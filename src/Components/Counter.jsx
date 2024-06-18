import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter(props) {
    const count=useSelector((state)=>state)
  return (
    <div className='font-bold text-3xl '>
{count}
    </div>
  )
}

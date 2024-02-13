import React, { useState } from 'react'
import './Button.css'

function Button() {
 
    const [count, setCount]= useState(1)

const decrease=()=>{
    if (count>0){
        setCount(count-1)
        }
}

const increase =()=> {
    setCount(count+1)
}

  return (
    <div id='sold'>
        <button>buy it</button>
        <button onClick={decrease}>-</button>
        <h3>quantity = {count}</h3>
        <button onClick={increase}>+</button>
    </div>
  )
  
}

export default Button
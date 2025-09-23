import React, {Component} from 'react'
import { useState } from 'react'



const FunctionState = () => {
    const [counter, setCounter] = useState(0)

  return (
    <div>
        <p> Function State: {counter}</p>
        <button onClick={ () => setCounter(prevCounter => prevCounter + 1)}>State dans la Fontion</button>
    </div>
  )
}

export default FunctionState



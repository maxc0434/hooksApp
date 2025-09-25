import React from 'react'
import { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "raz":
            return initialState;
        default:
            return state;
    }
    }



function Count () {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

    <h1> {count} </h1> 
    <button onClick={() => dispatch('increment') } className='btn btn-success m-3'>+</button>
    <button onClick={() => dispatch('decrement') } className='btn btn-danger m-3'>-</button>
    <button onClick={() => dispatch('raz') } className='btn btn-info m-3'>RAZ</button>
    </div>
  )
}

export default Count

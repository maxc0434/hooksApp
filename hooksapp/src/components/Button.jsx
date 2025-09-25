import React from 'react'

const Button = ({ btnColor, increment, children, handleClick }) => {
    console.log(`Button ${children}`)
  return  <button onClick={() => handleClick(increment)} className={`${btnColor}`}> + {increment} % </button>
  
}

export default React.memo (Button)

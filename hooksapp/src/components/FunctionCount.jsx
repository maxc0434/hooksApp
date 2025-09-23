import {useState, useEffect} from 'react'


function FunctionCount() {

    const [count, setCount] = useState(0)

    useEffect( () => {
        setTimeout( () => { 

            document.title = `Vous avez cliqué ${count} fois`
        }, 2000)
    })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ () => setCount(count => count + 1)}> Incrémentation + 1</button>
    </div>
  )
}

export default FunctionCount

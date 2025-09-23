import { useState, useEffect } from "react";

function FunctionCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(''); 

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = `Vous avez cliqué ${count} fois`;
  //   }, 2000);
  // });

    useEffect(() => {
      // le UseEffect fait quoi :
      console.log(`mise a jour du state via useEffect`)
      document.title = `Vous avez cliqué ${count} fois`}, 
      // le UseEffect le fait quand:
      [count]);

  return (
    <div className="container border">
      <h1>{count}</h1>
      
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      {/* <button onClick={() => setCount((count) => count + 1)}>
        {" "}
        Hook UseEffect{" "}
      </button> */}


      <button onClick={() => setCount(count + 1)}>
        {" "}
        Hook UseEffect {" "}
      </button>
    </div>
  );
}

export default FunctionCount;

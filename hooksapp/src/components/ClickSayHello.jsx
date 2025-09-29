import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

function ClickSayHello() {

    const [text, setText] = useState('');
    const [isTrue, setIsTrue] = useState(true);
    useUpdateDocTitle(text);

    useEffect(() => {
      if(isTrue) {
        setText("Bonjour")
      } else { 
        setText("Bonsoir")
      }
    }, [isTrue]);
 

  return (
    
    <button onClick={() => setIsTrue(!isTrue)}> Cliquez </button>
  )
}

export default ClickSayHello

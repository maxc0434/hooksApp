import { useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

function ClickSayHello() {

    const [text, setText] = useState('');
    useUpdateDocTitle(text);

  return (
    
    <button onClick={() => setText("Hello World")}> Cliquez </button>
  )
}

export default ClickSayHello

import { useState } from "react";
import { UserContext, ColorContext } from "./components/MyContext";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({ name: "Lisa", age: 8 });
    
  console.log(setUser)
  
  return (
    <div>
      <h1> Hook UseContext </h1>
      <br />
      <br />
      <UserContext.Provider value={user}>
        <ColorContext.Provider value={"text-red-500"}>
          <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

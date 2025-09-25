import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ProgressBarCallBack from "./components/ProgressBarCallBack";
import { UserContext, ColorContext } from "./components/MyContext";
import Profile from "./components/Profile";
import CountReducer from "./components/CountReducer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profil from "./pages/Profil";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // const [user, setUser] = useState({ name: "Lisa", age: 8 });
  // console.log(setUser)

  // const [isAdmin, setIsAdmin] = useState(false);
  // console.log(setIsAdmin);

  const [countOne, setCountOne] = useState({
    value: 0,
    btnColor: "bg-green-500",
    increment: 25,
  });

  const [countTwo, setCountTwo] = useState({
    value: 0,
    btnColor: "bg-red-500",
    increment: 20,
  });

  const incrementCountOne = useCallback((val) => {
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
    console.log('je suis dans incrementCountOne');
  }, [countOne]);

    const incrementCountTwo = useCallback((val) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
        console.log('je suis dans incrementCountTwo');
  }, [countTwo]);

  return (
    // <Router>
    //   <nav class={"text-4xl "}>
    //     <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
    //     <Link to="/Profil">Profil</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route
    //       path="/profil"
    //       element={
    //         <PrivateRoute isAdmin={isAdmin}>
    //           <Profil />
    //         </PrivateRoute>
    //       }
    //     />
    //   </Routes>
    // </Router>



    // <div>
    //   <h1> Hook UseContext </h1>
    //   <br />
    //   <br />
    //   <UserContext.Provider value={user}>
    //     <ColorContext.Provider value={"text-red-500"}>
    //       <Profile />
    //     </ColorContext.Provider>
    //   </UserContext.Provider>
    // </div>



   <div>
   {/* <h1> Test Hook UseReducer </h1>
   <CountReducer /> */}



    <h1> Hook UseCallBack</h1>
   <ProgressBarCallBack
     text="CountOne"
     count={countOne.value}
     bgColor={countOne.btnColor} />
   <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}> Count 1 </Button>

   <ProgressBarCallBack
     text="CountTwo"
     count={countTwo.value}
     bgColor={countTwo.btnColor} />
   <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}> Count 2 </Button> 

    </div>
  );
}

export default App;

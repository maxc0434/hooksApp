import "./App.css";
import Todo from "./components/Todo"; 
import ClassCount from "./components/ClassCount";
import FunctionCount from "./components/FunctionCount";

function App() {
  return (
    <div>
        <Todo/>

        <ClassCount/>

        <FunctionCount/>
    </div>
  );
}

export default App;
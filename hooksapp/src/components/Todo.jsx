import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter du lait" },
    { id: 2, todo: "Acheter du pain" },
    { id: 3, todo: "Acheter du fromage" },
  ]);

  console.log(todos);
  console.log(todos.lenght);


  const myTodos = todos.map( todo => {
    return (
        <li className="list-group-item" key={todo.id}> {todo.todo} </li>

    )
  })

  const addNewTodo = (newTodo) => {
    const newid = uuidv4();

    if(newTodo !== ''){
      warning && setWarning(false)
      
      setTodos([...todos, {
        id: newid,
        todo: newTodo
      }])
    } else { 
      setWarning(true);
    }
  }
  const [warning, setWarning] = useState(false);
  const warningMsg = warning && <div className="alert alert-danger" role="alert">Remplis ce champs</div>

  return (
    <div>
      <h1> {todos.length} To-Do</h1>
      <ul> {myTodos} </ul>
      {warningMsg}
        <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  );
};

export default Todo;

import React,{useState} from "react";
import TodoList from "./TodoList";

function App() {
 const [todos,setTodos] = useState(['Todo 1','Todo 2'])
  // El primer elemento es todos nuestros todos y el setTodos es la funcion que actualizara nuestros Todos
  return (
    <>
   <TodoList todos={todos}/>
   <input type="text" />
   <button>Add Todo</button>
   <button>Clear Completed Todos</button>
   <div>0 left to do</div>
   </>
  )
}

export default App;

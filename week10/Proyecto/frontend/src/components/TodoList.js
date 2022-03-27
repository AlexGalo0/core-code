import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useEffect } from "react";
import axios from "axios"

function TodoList() {
  const [todos, setTodos] = useState([]);

  const getTodos = () =>{
    axios.get('http://localhost:3003/to-dos') 
    .then(function (response) {
      setTodos(response.data)
    })
  }

  useEffect(() => {
    getTodos()
  }, []);

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

   axios.post('http://localhost:3003/to-dos' , {
     title:todo.title ,
     description:todo.description,
     isDone:todo.isDone

   }).then(function(response){
      getTodos()
   }

   )
  };

  const showDescription = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.showDescription = !todo.showDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);


    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    </>
  );
}

export default TodoList;

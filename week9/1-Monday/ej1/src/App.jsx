import React, { useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Tarea 1",
      isDone: false,
    },
    {
      id: 2,
      task: "Tarea 2",
      isDone: true,
    },
  ]);

  return (
    <>
      <TodoList todos={[todos]}></TodoList>
      <input type="text" placeholder="nuevaTarea" />
      <button>😊</button>
      <button>🎃</button>
    </>
  );
}

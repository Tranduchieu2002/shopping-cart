import React from "react";
import Todo from "./Todo";
export default function TodoList({ Todolist }) {
  return (
    <>
      {Todolist.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
      {
         Todolist.map
      }
    </>
  );
}

import React from "react";
import TodoList from "../components/todos/TodoList";
import CreateTodo from "../components/todos/CreateTodo";
import { Outlet } from "react-router-dom";

export default function Todos() {
  return (
    <>
      <h1>Todos</h1>
      <TodoList />
      <CreateTodo />
      <Outlet />
    </>
  );
}

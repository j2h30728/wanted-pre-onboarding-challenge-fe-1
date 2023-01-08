import React, { useState } from "react";
import TodoDetail from "../components/todos/TodoDetail";
import UpdateTodo from "../components/todos/UpdateTodo";

export default function Todos() {
  const [update, setUpdate] = useState(false);
  return !update ? (
    <TodoDetail update={update} setUpdate={setUpdate} />
  ) : update ? (
    <UpdateTodo setUpdate={setUpdate} />
  ) : (
    <></>
  );
}

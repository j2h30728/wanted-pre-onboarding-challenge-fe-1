import React, { useState } from "react";
import TodoDetail from "../components/todos/TodoDetail";
import UpdateTodo from "../components/todos/UpdateTodo";
import handleModal from "../hook/handleModal";

export default function Todos() {
  const { isModalOpen, handleModalOpen } = handleModal();
  return (
    <>
      <TodoDetail handleModalOpen={handleModalOpen} />
      <UpdateTodo handleModalOpen={handleModalOpen} isModalOpen={isModalOpen} />
    </>
  );
}

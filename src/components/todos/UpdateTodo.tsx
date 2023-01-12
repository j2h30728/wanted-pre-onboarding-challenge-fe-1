import React, { useEffect } from "react";
import { useTodo, getTodoByID } from "../../queries/useTodo";
import TodoForm from "./TodoForm";
import Modal from "../common/Modal";
import { ITodoProp, IUpdateTodoModalProp } from "../type/todos";

const UpdateTodo = ({ handleModalOpen, isModalOpen }: IUpdateTodoModalProp) => {
  const { data: oldData } = getTodoByID();
  const { updateTodo } = useTodo();
  const { mutate } = updateTodo();

  const handleFormSubmit = (UpdateTodo: ITodoProp) => {
    mutate(UpdateTodo);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClickToggleModal={() => handleModalOpen()}>
          <TodoForm
            onSubmit={handleFormSubmit}
            oldData={oldData}
            handleModalOpen={handleModalOpen}
          />
        </Modal>
      )}
    </>
  );
};
export default UpdateTodo;

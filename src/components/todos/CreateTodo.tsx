import React, { useEffect, useState } from "react";
import { useTodo } from "../../queries/useTodo";
import { AxiosError } from "axios";
import TodoForm from "./TodoForm";
import Modal from "../common/Modal";
import { Button } from "../common/common";
import handleModal from "../../hook/handleModal";
import { ITodoProp } from "../type/todos";
const CreateTodo = () => {
  const { isModalOpen, handleModalOpen } = handleModal();

  const {
    createTodo: { mutate },
  } = useTodo();

  const handleFormSubmit = (data: ITodoProp) => {
    mutate(data);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClickToggleModal={handleModalOpen}>
          <TodoForm
            onSubmit={handleFormSubmit}
            handleModalOpen={handleModalOpen}
          />
        </Modal>
      )}
      <Button btnName="Create Todo" onClick={handleModalOpen} />
    </>
  );
};
export default CreateTodo;

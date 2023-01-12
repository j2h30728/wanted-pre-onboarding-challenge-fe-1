import React, { useEffect } from "react";
import { ITodoProp, useTodo } from "../../queries/useTodo";
import { AxiosError } from "axios";
import TodoForm from "./TodoForm";

const CreateTodo = () => {
  const {
    createTodo: { mutate, isSuccess, error },
  } = useTodo();

  const handleFormSubmit = (data: ITodoProp) => {
    mutate(data);
  };

  useEffect(() => {
    if (error instanceof AxiosError) {
      alert(error.response?.data.error);
    }
  }, [isSuccess, error]);

  return <TodoForm onSubmit={handleFormSubmit} />;
};
export default CreateTodo;

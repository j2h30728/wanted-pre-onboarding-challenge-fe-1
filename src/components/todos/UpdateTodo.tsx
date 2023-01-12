import React, { useEffect } from "react";
import { ITodoProp, useTodo, getTodoByID } from "../../queries/useTodo";
import { AxiosError } from "axios";
import TodoForm, { IFromProp } from "./TodoForm";

const UpdateTodo = ({ setUpdate }: IFromProp) => {
  const { data: todo } = getTodoByID();
  const { updateTodo } = useTodo();
  const { mutate, isSuccess, error } = updateTodo();
  const handleFormSubmit = (data: ITodoProp) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("수정되었습니다.");
      setUpdate && setUpdate(false);
    } else if (error instanceof AxiosError) {
      alert(error.response?.data.error);
    }
  }, [isSuccess, error]);
  return (
    <TodoForm onSubmit={handleFormSubmit} data={todo} setUpdate={setUpdate} />
  );
};
export default UpdateTodo;

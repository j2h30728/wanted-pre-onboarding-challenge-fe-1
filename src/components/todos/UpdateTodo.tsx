import React, { useEffect } from "react";
import { ITodoProp, useTodo, getTodoByID } from "../../hook/useTodo";
import { AxiosError } from "axios";
import TodoForm from "./TodoForm";
interface IEditProp {
  setEdit: (data: boolean) => void;
}

const UpdateTodo = ({ setEdit }: IEditProp) => {
  const { data: todo } = getTodoByID();
  const { updateTodo } = useTodo();
  const { mutate, isSuccess, error } = updateTodo();
  const handleFormSubmit = (data: ITodoProp) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("수정되었습니다.");
      setEdit(false);
    } else if (error instanceof AxiosError) {
      alert(error.response?.data.error);
    }
  }, [isSuccess, error]);

  return <TodoForm onSubmit={handleFormSubmit} data={todo} />;
};
export default UpdateTodo;

import React, { useEffect } from "react";
import { ITodoProp, useTodo, getTodoByID } from "../../hook/useTodo";
import { AxiosError } from "axios";
import TodoForm from "./TodoForm";
import styled from "styled-components";
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
  return (
    <Container>
      <TodoForm onSubmit={handleFormSubmit} data={todo} setEdit={setEdit} />
    </Container>
  );
};
export default UpdateTodo;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

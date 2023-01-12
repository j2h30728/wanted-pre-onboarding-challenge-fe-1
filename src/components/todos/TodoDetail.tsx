import React, { useState } from "react";
import { getTodoByID, useTodo, ITodoProp } from "../../queries/useTodo";
import UpdateTodo from "./UpdateTodo";
import styled from "styled-components";
import { Content } from "../common";

interface ISetUpdateProp {
  setUpdate: (data: boolean) => void;
  update: boolean;
}

const TodoDetail = ({ update, setUpdate }: ISetUpdateProp) => {
  const { data: todo, isSuccess } = getTodoByID();
  const {
    deleteTodo: { mutate: deleteMutate, isSuccess: isDeleted },
  } = useTodo();

  const handleDelete = () => {
    todo && deleteMutate(todo.id);
  };

  return isSuccess ? (
    <Container>
      <Title>{todo.title}</Title>
      <Content content={todo.content} />
      <ButtonContainer>
        <button onClick={() => setUpdate(!update)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </ButtonContainer>
    </Container>
  ) : null;
};
export default TodoDetail;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 30px 30px 0 10%;
`;
const Title = styled.h2`
  padding-top: 20px;
  justify-content: center;
`;
const UpdateContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

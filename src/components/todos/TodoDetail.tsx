import React from "react";
import { getTodoByID, useTodo } from "../../queries/useTodo";
import styled from "styled-components";
import { Content, Button } from "../common/common";
import { IUpdateTodoModalProp } from "../type/todos";

const TodoDetail = ({ handleModalOpen }: IUpdateTodoModalProp) => {
  const { data: todo, isSuccess } = getTodoByID();
  const {
    deleteTodo: { mutate: deleteMutate },
  } = useTodo();

  const handleDelete = () => {
    const isConfirm = confirm("삭제하시겠습니까?");
    isConfirm && todo && deleteMutate(todo.id);
  };
  return isSuccess ? (
    <Container>
      <Title>{todo.title}</Title>
      <Content content={todo.content} />
      <ButtonContainer>
        <Button btnName="Update" onClick={() => handleModalOpen()} />
        <Button btnName="Delete" onClick={handleDelete} />
      </ButtonContainer>
    </Container>
  ) : (
    <></>
  );
};
export default TodoDetail;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  margin: 20px;
  padding: 20px;
  border: 1px solid ${props => props.theme.color1};
  border-radius: 10px;
`;
const Title = styled.h2`
  font-size: 30px;
  padding: 20px 0;
  margin-bottom: 10px;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.color1};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

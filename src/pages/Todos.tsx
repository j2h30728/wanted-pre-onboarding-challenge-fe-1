import React from "react";
import TodoList from "../components/todos/TodoList";
import CreateTodo from "../components/todos/CreateTodo";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Todos() {
  return (
    <Container>
      <TodosWrapper>
        <TodoList />
      </TodosWrapper>
      <CreateAndEdit>
        <CreateTodo />
        <Outlet />
      </CreateAndEdit>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const CreateAndEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

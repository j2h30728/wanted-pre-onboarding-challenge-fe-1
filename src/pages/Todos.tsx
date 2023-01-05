import React from "react";
import TodoList from "../components/todos/TodoList";
import CreateTodo from "../components/todos/CreateTodo";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export default function Todos() {
  return (
    <Container>
      <List>
        <Title to="/todos">Todos</Title>
        <TodoList />
      </List>
      <CreateAndEdit>
        <Title to="/todos">Create Todo</Title>
        <CreateTodo />
        <Outlet />
      </CreateAndEdit>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Title = styled(Link)`
  align-self: center;
  text-align: center;
  padding-top: 20px;
  width: 280px;
  border-bottom: 1px solid;
  border-radius: 30px;
  text-decoration: none;
  color: ${prop => prop.theme.textDarkColor};
  font-size: 40px;
  cusor: pointer;
`;

const CreateAndEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 50%;
`;

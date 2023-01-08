import React from "react";
import TodoList from "../components/todos/TodoList";
import CreateTodo from "../components/todos/CreateTodo";
import { Outlet, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Todo from "./Todo";

export default function Todos() {
  return (
    <Container>
      <List>
        <TodoList />
      </List>
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
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const CreateAndEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

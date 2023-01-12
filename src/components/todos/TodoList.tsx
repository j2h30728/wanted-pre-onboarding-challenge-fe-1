import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTodo } from "../../queries/useTodo";
import styled from "styled-components";
import { ContainerTitle } from "../common/common";
import { ITodoProp } from "../type/todos";

const TodoList = () => {
  const navigate = useNavigate();

  if (window.localStorage.getItem("token") === null) {
    navigate("/auth/login");
    alert("로그인이 필요한 작업입니다.");
  }

  const [selected, setSelected] = useState("");

  const {
    getTodos: { data: todoList },
    deleteTodo: { mutate: deleteMutate, isSuccess: isDeleted },
  } = useTodo();

  useEffect(() => {
    if (selected) {
      deleteMutate(selected);
      isDeleted && navigate("/todos");
      setSelected("");
    }
  }, [selected]);

  return (
    <Container>
      <ContainerTitle title="Todo List"></ContainerTitle>
      <TodosWrapper>
        {todoList && todoList.length > 0 ? (
          todoList.map((todo: ITodoProp) => (
            <Todo key={todo.id}>
              <Title to={`/todos/${todo.id}`}>{todo.title}</Title>
            </Todo>
          ))
        ) : (
          <p>추가해주세요</p>
        )}
      </TodosWrapper>
    </Container>
  );
};
export default TodoList;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodosWrapper = styled.ul`
  margin: 30px;
  width: 80%;
  align-self: flex-start;
`;
const Todo = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 10px 0;
  margin: 20px;
  border-bottom: 1px dashed ${prop => prop.theme.color1};
`;
const Title = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: ${prop => prop.theme.textColor};
`;

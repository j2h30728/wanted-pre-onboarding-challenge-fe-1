import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ITodoProp, useTodo } from "../../hook/useTodo";
import styled from "styled-components";

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
      {todoList && todoList.length > 0 ? (
        todoList.map((todo: ITodoProp, idx: number) => (
          <Todo key={todo.id}>
            <Title to={`/todos/${todo.id}`}>
              {todo.title}
              <Content>{todo.content}</Content>
            </Title>
            <DeleteBtn
              onClick={() => {
                todo.id && setSelected(todo.id);
              }}>
              삭제
            </DeleteBtn>
          </Todo>
        ))
      ) : (
        <p>추가해주세요</p>
      )}
    </Container>
  );
};
export default TodoList;

const Container = styled.ul`
  margin: 30px;
  padding: 0;
`;
const Todo = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 20px 0;
  border-bottom: 2px solid ${prop => prop.theme.color1};
`;
const Title = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: ${prop => prop.theme.textColor};
`;
const Content = styled.p`
  font-size: 15px;
`;
const DeleteBtn = styled.button`
  width: 100px;
  align-self: end;
`;

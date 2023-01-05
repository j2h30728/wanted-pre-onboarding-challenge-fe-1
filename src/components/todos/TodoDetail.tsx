import React, { useState } from "react";
import { getTodoByID, useTodo } from "../../hook/useTodo";
import UpdateTodo from "./UpdateTodo";
import styled from "styled-components";

const TodoDetail = () => {
  const { data: todo, isSuccess } = getTodoByID();
  const {
    deleteTodo: { mutate: deleteMutate, isSuccess: isDeleted },
  } = useTodo();

  const [edit, setEdit] = useState(false);
  const handleCancle = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteMutate(todo.id);
  };

  return !edit && isSuccess ? (
    <CreateContainer>
      <Title>{todo.title}</Title>
      <p>{todo.content}</p>
      <ButtonContainer>
        <button onClick={() => setEdit(!edit)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </ButtonContainer>
    </CreateContainer>
  ) : edit ? (
    <EditContainer>
      <UpdateTodo setEdit={setEdit} />
    </EditContainer>
  ) : (
    <></>
  );
};
export default TodoDetail;
const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 90px 0 0 60px;
`;
const Title = styled.h2`
  padding-top: 20px;
  justify-content: center;
`;
const EditContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const CancleBtn = styled.button`
  width: 290px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

import React, { useState } from "react";
import { getTodoByID } from "../../hook/useTodo";
import TodoEdit from "./UpdateTodo";

const TodoDetail = () => {
  const { data: todo, isSuccess } = getTodoByID();
  const [edit, setEdit] = useState(false);

  const handleCancle = () => {
    setEdit(!edit);
  };

  return !edit && isSuccess ? (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <button onClick={() => setEdit(!edit)}>수정</button>
      <button>삭제</button>
    </div>
  ) : edit ? (
    <div>
      <TodoEdit setEdit={setEdit} />
      <button onClick={handleCancle}>취소하기</button>
    </div>
  ) : (
    <>Loading..</>
  );
};
export default TodoDetail;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ITodoProp, useTodo } from "../../hook/useTodo";

const TodoList = () => {
  const navigate = useNavigate();
  const {
    getTodos: { data: todoList },
    deleteTodo: { mutate: deleteMutate, isSuccess: isDeleted },
  } = useTodo();
  console.log(todoList);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected) {
      deleteMutate(selected);
      isDeleted && navigate("/todos");
      setSelected("");
    }
  }, [selected]);

  return (
    <div>
      <ul>
        {todoList && todoList.length > 0 ? (
          todoList.map((todo: ITodoProp, idx: number) => (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              <p>{todo.content}</p>
              <button
                onClick={() => {
                  todo.id && setSelected(todo.id);
                }}>
                삭제
              </button>
            </li>
          ))
        ) : (
          <p>추가해주세요</p>
        )}
      </ul>
    </div>
  );
};
export default TodoList;

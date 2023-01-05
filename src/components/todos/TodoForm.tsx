import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITodoProp, useTodo } from "../../hook/useTodo";
import { yupResolver } from "@hookform/resolvers/yup";

import { todoSchma } from "../../uti/yup";
import { useNavigate } from "react-router-dom";

interface form {
  onSubmit: (data: ITodoProp) => void;
  data?: { title: string; content: string; id: string };
}

export default function TodoForm({ onSubmit, data }: form) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodoProp>({
    resolver: yupResolver(todoSchma),
  });
  const handelFrom = (data: ITodoProp) => {
    onSubmit(data);
    reset();
  };
  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        content: data.content,
      });
    }
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit(handelFrom)}>
        <div>
          <label>할 일</label>
          <input {...register("title")} />
          <p>{errors.title?.message}</p>
        </div>
        <div>
          <label>상세 내용</label>
          <textarea {...register("content")} />
        </div>
        <input type="submit" value={data ? "수정하기" : "할 일 등록"} />
      </form>
    </div>
  );
}

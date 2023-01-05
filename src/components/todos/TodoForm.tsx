import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITodoProp, useTodo } from "../../hook/useTodo";
import { yupResolver } from "@hookform/resolvers/yup";

import { todoSchma } from "../../uti/yup";
import styled from "styled-components";

interface form {
  onSubmit: (data: ITodoProp) => void;
  data?: { title: string; content: string; id: string };
  setEdit?: (data: boolean) => void;
}

export default function TodoForm({ onSubmit, data, setEdit }: form) {
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
  const handleCancle = () => {
    setEdit && setEdit(false);
  };

  return (
    <Container onSubmit={handleSubmit(handelFrom)}>
      <Label htmlFor="title">할 일</Label>
      <div>
        <Title id="title" {...register("title")} />
        <Message>{errors.title?.message}</Message>
      </div>
      <Label htmlFor="content">상세 내용</Label>
      <div>
        <Content id="content" rows={4} cols={40} {...register("content")} />
      </div>
      <Button type="submit" value={data ? "수정하기" : "할 일 등록"} />
      {data && <CancleBtn onClick={handleCancle}>취소하기</CancleBtn>}
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  height: 20%;
  flex-direction: column;
  width: 300px;
  margin-top: 50px;
  padding: 0 30px;
`;
const Label = styled.label`
  font-size: 20px;
  margin-bottom: 3px;
`;
const Title = styled.input`
  width: 280px;
  padding: 8px 4px;
`;
const Content = styled.textarea`
  width: 280px;
  padding: 8px 4px;
  resize: none;
`;
const Button = styled.input`
  margin-top: 5px;
  width: 290px;
  height: 150px;
  z-index: 10;
`;
const Message = styled.p`
  height: 30px;
  color: red;
`;
const CancleBtn = styled.button`
  margin-top: 5px;
  width: 290px;
`;

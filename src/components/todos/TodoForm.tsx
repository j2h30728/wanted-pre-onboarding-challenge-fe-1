import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITodoProp, useTodo } from "../../hook/useTodo";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchma } from "../../uti/yup";
import styled from "styled-components";
import { ContainerTitle } from "../common";

export interface IFromProp {
  onSubmit?: (data: ITodoProp) => void;
  data?: { title: string; content: string; id: string };
  setUpdate?: (data: boolean) => void;
}

export default function TodoForm({ onSubmit, data, setUpdate }: IFromProp) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodoProp>({
    resolver: yupResolver(todoSchma),
  });
  const handelFrom = (data: ITodoProp) => {
    onSubmit && onSubmit(data);
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
    setUpdate && setUpdate(false);
  };

  return (
    <Container onSubmit={handleSubmit(handelFrom)}>
      <ContainerTitle
        to="/todos"
        title={data ? "Update Todo" : "Create Todo"}
      />
      <label htmlFor="title">할 일</label>
      <div>
        <Title id="title" {...register("title")} />
        <Message>{errors.title?.message}</Message>
      </div>
      <label htmlFor="content">상세 내용</label>
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
  height: 330px;
  width: 300px;
  flex-direction: column;

  label {
    font-size: 20px;
    padding-bottom: 5px;
    &:first-of-type {
      padding-top: 20px;
    }
  }
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
  margin-top: 10px;
  width: 290px;
  height: 180px;
`;
const Message = styled.p`
  color: red;
  height: 30px;
`;
const CancleBtn = styled.button`
  margin-top: 5px;
  width: 290px;
`;

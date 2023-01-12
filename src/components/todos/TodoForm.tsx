import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchma } from "../../util/yup";
import styled from "styled-components";
import { ContainerTitle } from "../common/common";
import { Button } from "../common/common";
import { ITodoProp, ITodoFormProp } from "../type/todos";

export default function TodoForm({
  onSubmit,
  oldData,
  handleModalOpen,
}: ITodoFormProp) {
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
    if (oldData) {
      reset({
        title: oldData.title,
        content: oldData.content,
      });
    }
  }, [oldData]);

  return (
    <Container onSubmit={handleSubmit(handelFrom)}>
      <ContainerTitle title={oldData ? "Update Todo" : "Create Todo"} />
      <TitleWrapper>
        <label htmlFor="title">Todo</label>
        <Title id="title" {...register("title")} />
        <Message>{errors.title?.message}</Message>
      </TitleWrapper>
      <ContentWrapper>
        <label htmlFor="content">Content</label>
        <Content id="content" rows={4} cols={40} {...register("content")} />
      </ContentWrapper>
      <Button
        onClick={handleSubmit(handelFrom)}
        btnName={oldData ? "Update" : "Create"}
      />
      {oldData ? (
        <>
          <Button btnName="Cancle" onClick={() => handleModalOpen()}></Button>
          <Alert>Cancle 버튼을 클릭하면 수정 모드가 종료됩니다.</Alert>
        </>
      ) : (
        <>
          <Button btnName="Cancle" onClick={() => handleModalOpen()}></Button>
        </>
      )}
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  height: 420px;
  width: 550px;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
  border: 1px solid ${props => props.theme.color1};
  border-radius: 15px;
  background-color: white;
  label {
    font-size: 20px;
    padding-bottom: 5px;
    &:first-of-type {
      padding-top: 20px;
    }
  }
`;
const TitleWrapper = styled.div`
  margin-top: 20px;
`;
const Title = styled.input`
  width: 95%;
  padding: 8px 4px;
`;
const ContentWrapper = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.textarea`
  width: 95%;
  padding: 8px 4px;
  resize: none;
`;
const Message = styled.p`
  color: red;
  height: 30px;
`;
const Alert = styled.p`
  align-self: center;
  margin-top: 10px;
`;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { authSchma } from "../../util/yup";
import { IAuthProp } from "../type/auth";
interface form {
  title: string;
  onSubmit: (data: IAuthProp) => void;
  buttonName: string;
}

export default function AuthForm({ title, onSubmit, buttonName }: form) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthProp>({
    resolver: yupResolver(authSchma),
  });
  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <InputWrapper>
          <Input
            id="email"
            placeholder="이메일을 입력해주세요."
            {...register("email")}></Input>
          <Message>{errors.email?.message}</Message>
        </InputWrapper>
        <Label htmlFor="password">Password</Label>
        <InputWrapper>
          <Input
            id="pasword"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            {...register("password")}></Input>
          <Message>{errors.password?.message}</Message>
        </InputWrapper>
        <Button type="submit" value={buttonName} />
      </Form>
    </Container>
  );
}
const Container = styled.div`
  border: 2px solid ${prop => prop.theme.color1};
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
`;
const Title = styled.h1`
  padding-top: 20px;
  font-size: 30px;
  text-align: center;
`;

const InputWrapper = styled.div``;
const Label = styled.label`
  font-size: 20px;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 4px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color1};
`;
const Button = styled.input`
  align-self: center;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: ${prop => prop.theme.color1};
  &:hover {
    background-color: ${prop => prop.theme.color2};
  }
  &:active {
    background-color: ${prop => prop.theme.pointColor};
  }
`;
const Message = styled.p`
  height: 30px;
  color: red;
`;

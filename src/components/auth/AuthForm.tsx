import React from "react";
import { useForm } from "react-hook-form";
import { IAuthProp } from "../../hook/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchma } from "../../uti/yup";
import styled from "styled-components";

interface form {
  onSubmit: (data: IAuthProp) => void;
  buttonName: string;
}

export default function AuthForm({ onSubmit, buttonName }: form) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthProp>({
    resolver: yupResolver(authSchma),
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">email</Label>
      <InputContainer>
        <Input
          id="email"
          placeholder="이메일을 입력해주세요."
          {...register("email")}></Input>
        <Message>{errors.email?.message}</Message>
      </InputContainer>
      <Label htmlFor="password">Password</Label>
      <InputContainer>
        <Input
          id="pasword"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          {...register("password")}></Input>
        <Message>{errors.password?.message}</Message>
      </InputContainer>
      <Button type="submit" value={buttonName} />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding 30px;
`;
const InputContainer = styled.div``;
const Label = styled.label`
  font-size: 20px;
  margin-bottom: 3px;
`;
const Input = styled.input`
  width: 280px;
  padding: 8px 4px;
`;
const Button = styled.input`
  align-self: center;
  width: 100px;
  height: 50px;
  border: 1px none;
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

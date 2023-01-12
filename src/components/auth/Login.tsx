import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import styled from "styled-components";
import { IAuthProp } from "../type/auth";
import { useLogin } from "../../queries/useAuth";

export default function Login() {
  const { mutate: loginMutate } = useLogin();

  const handleSubmitForm = (loginData: IAuthProp) => {
    loginMutate(loginData);
  };

  return (
    <Container>
      <Title>Login</Title>
      <AuthForm onSubmit={handleSubmitForm} buttonName="Log in" />
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid ${prop => prop.theme.color1};
  border-radius: 10px;
`;
const Title = styled.h1`
  padding-top: 20px;
  text-align: center;
`;

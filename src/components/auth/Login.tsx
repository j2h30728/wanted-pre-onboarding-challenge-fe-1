import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { AxiosError } from "axios";
import { IAuthProp, useLogin } from "../../hook/useAuth";
import styled from "styled-components";

export default function Login() {
  const { mutate, data: loginData, isSuccess, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmitForm = (data: IAuthProp) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess && loginData) {
      alert(loginData.message);
      navigate("/");
    } else if (error instanceof AxiosError) {
      alert(error.response?.data.error);
      navigate("/login");
    }
  }, [isSuccess, loginData, error]);
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

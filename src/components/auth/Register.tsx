import React, { useEffect } from "react";
import { IAuthProp, useRegister } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import styled from "styled-components";

import AuthForm from "./AuthForm";

export default function Register() {
  const { mutate, data: registerData, isSuccess, error } = useRegister();
  const navigate = useNavigate();
  const handleSubmitForm = (data: IAuthProp) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess && registerData) {
      alert(registerData.message);
      navigate("/");
    } else if (error instanceof AxiosError) {
      alert(error.response?.data.error);
    }
  }, [isSuccess, registerData, error]);
  return (
    <Container>
      <Title>Register</Title>
      <AuthForm onSubmit={handleSubmitForm} buttonName="Register" />
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

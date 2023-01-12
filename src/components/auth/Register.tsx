import React from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import { IAuthProp } from "../type/auth";
import { useRegister } from "../../queries/useAuth";

export default function Register() {
  const { mutate: registerMutate } = useRegister();
  const handleSubmitForm = (regitsterData: IAuthProp) => {
    registerMutate(regitsterData);
  };

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

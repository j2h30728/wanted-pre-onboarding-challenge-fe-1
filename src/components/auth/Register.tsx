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
    <AuthForm
      title="Register"
      onSubmit={handleSubmitForm}
      buttonName="Submit"
    />
  );
}

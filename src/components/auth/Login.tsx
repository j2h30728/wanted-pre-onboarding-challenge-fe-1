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
    <AuthForm title="Login" onSubmit={handleSubmitForm} buttonName="Submit" />
  );
}

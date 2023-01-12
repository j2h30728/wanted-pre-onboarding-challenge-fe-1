import React from "react";
import AuthForm from "./AuthForm";
import { IAuthProp } from "../type/auth";
import { useLogin } from "../../queries/useAuth";

export default function Login() {
  const { mutate: loginMutate } = useLogin();

  const handleSubmitForm = (loginData: IAuthProp) => {
    loginMutate(loginData);
  };

  return (
    <AuthForm title="로그인" onSubmit={handleSubmitForm} buttonName="확인" />
  );
}

import React from "react";
import AuthForm from "./AuthForm";
import { IAuthProp } from "../type/auth";
import { useRegister } from "../../queries/useAuth";

export default function Register() {
  const { mutate: registerMutate } = useRegister();
  const handleSubmitForm = (regitsterData: IAuthProp) => {
    registerMutate(regitsterData);
  };

  return (
    <AuthForm title="회원가입" onSubmit={handleSubmitForm} buttonName="제출" />
  );
}

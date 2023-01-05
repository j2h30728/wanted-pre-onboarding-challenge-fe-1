import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { AxiosError } from "axios";
import { IAuthProp, useLogin } from "../../hook/useAuth";

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
    }
  }, [isSuccess, loginData, error]);
  return (
    <>
      <h1>Login</h1>
      <AuthForm onSubmit={handleSubmitForm} />
    </>
  );
}

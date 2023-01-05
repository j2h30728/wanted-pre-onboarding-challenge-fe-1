import React, { useEffect } from "react";
import { IAuthProp, useRegister } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

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
    <>
      <h1>Register</h1>
      <AuthForm onSubmit={handleSubmitForm} />
    </>
  );
}

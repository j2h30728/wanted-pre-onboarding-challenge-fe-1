import React from "react";
import { useForm } from "react-hook-form";
import { IAuthProp } from "../../hook/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchma } from "../../uti/yup";

interface form {
  onSubmit: (data: IAuthProp) => void;
}

export default function AuthForm({ onSubmit }: form) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthProp>({
    resolver: yupResolver(authSchma),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>email</label>
        <input {...register("email")}></input>
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")}></input>
        <p>{errors.password?.message}</p>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import { IAuthProp } from "../components/type/auth";
import { AxiosError } from "axios";
import token from "../lib/token";

export function useRegister() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IAuthProp) => {
      return await api.post("/users/create", data).then(res => res.data);
    },
    onSuccess: ({ token: accessToken }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      token.setToken("token", accessToken);
      window.location.replace("/");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error);
      }
    },
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IAuthProp) => {
      return await api.post("/users/login", data).then(res => res.data);
    },
    onSuccess: ({ token: accessToken }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      token.setToken("token", accessToken);
      window.location.href = "/";
    },
    onError: error => {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error);
      }
    },
  });
}

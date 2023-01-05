import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../uti/api";

export interface IAuthProp {
  email: string;
  password: string;
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IAuthProp) => {
      return await api.post("/users/login", data).then(res => res.data);
    },
    onSuccess: result => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      const { token } = result;
      window.localStorage.setItem("token", token);
    },
  });
}
export function useRegister() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IAuthProp) => {
      return await api.post("/users/create", data).then(res => res.data);
    },
    onSuccess: result => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      const { token } = result;
      window.localStorage.setItem("token", token);
    },
  });
}

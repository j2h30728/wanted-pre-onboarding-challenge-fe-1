import { api } from "../lib/api";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface ITodoProp {
  title: string;
  content: string;
  id: string;
}

export function useTodo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getTodos = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return await api
        .get("/todos")
        .then(res => res.data)
        .then(res => res.data);
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
    retryDelay: 3000,
  });

  const createTodo = useMutation({
    mutationFn: async (todo: ITodoProp) => {
      return await api.post("/todos", todo).then(res => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/todos");
    },
  });

  const updateTodo = () => {
    const { id } = useParams();
    return useMutation({
      mutationFn: async (todo: ITodoProp) => {
        return await api.put(`/todos/${id}`, todo).then(res => res.data);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
        navigate(`/todos/${id}`);
      },
    });
  };

  const deleteTodo = useMutation({
    mutationFn: async (id: string) => {
      return await api.delete(`/todos/${id}`).then(res => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/todos");
    },
  });
  return { getTodos, createTodo, updateTodo, deleteTodo };
}

export const getTodoByID = () => {
  const { id } = useParams();
  return useQuery<ITodoProp>({
    queryKey: ["todos", id],
    queryFn: async () => {
      return await api
        .get(`/todos/${id}`)
        .then(res => res.data)
        .then(res => res.data);
    },
  });
};

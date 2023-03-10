import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";
import DefaultTodoDetail from "./components/todos/DefaultTodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },

      {
        path: "todos",
        element: <Todos />,
        children: [
          {
            path: "",
            element: <DefaultTodoDetail />,
          },
          {
            path: ":id",
            element: <Todo />,
          },
        ],
      },
    ],
  },
]);

export default router;

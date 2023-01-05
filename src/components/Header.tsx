import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  const handleLogin = () => {
    if (token) {
      confirm("로그아웃 하시겠습니까?");
      window.localStorage.removeItem("token");
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <header>
      <ul>
        <li>
          <a onClick={handleLogin}>{token ? "LogOut" : "Login"}</a>
        </li>
        <li>
          <Link to="auth/register">Register</Link>
        </li>
        <li>
          <Link to="todos">Todos</Link>
        </li>
      </ul>
    </header>
  );
}

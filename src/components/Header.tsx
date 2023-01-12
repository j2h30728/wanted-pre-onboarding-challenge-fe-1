import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hook/auth";
import token from "../lib/token";

export default function Header() {
  const hasToken = token.getToken("token");

  const handleLogin = () => {
    if (hasToken) {
      confirm("로그아웃 하시겠습니까?");
      useLogout();
    }
    window.location.href = "/auth/login";
  };
  return (
    <Head>
      <li>
        <a onClick={handleLogin}>{hasToken ? "LogOut" : "Login"}</a>
      </li>
      <HomeLink>
        <Link to="/">Home</Link>
      </HomeLink>
      {!hasToken && (
        <li>
          <Link to="auth/register">Register</Link>
        </li>
      )}
      {hasToken && (
        <li>
          <Link to="todos">Todos</Link>
        </li>
      )}
    </Head>
  );
}
const Head = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 50px;
  border-bottom: 2px solid ${prop => prop.theme.color1};

  li,
  a {
    list-style-type: none;

    text-decoration: none;
    color: ${props => props.theme.textColor};
    font-size: 1.4rem;

    &:hover {
      color: ${props => props.theme.pointColor};
      cursor: pointer;
    }
  }
`;

const HomeLink = styled.li`
  a {
    border-bottom: 1px solid;
    border-radius: 30px;
    font-size: 35px;
    padding: 0 20px;
  }
`;

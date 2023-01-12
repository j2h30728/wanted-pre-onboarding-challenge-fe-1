import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hook/auth";
import token from "../lib/token";

export default function Header() {
  const hasToken = token.getToken("token");

  const handleLogin = () => {
    if (hasToken) {
      const isConfirm = confirm("로그아웃 하시겠습니까?");
      isConfirm && useLogout();
    } else {
      window.location.href = "/auth/login";
    }
  };
  return (
    <Head>
      <li>
        <a onClick={handleLogin}>{hasToken ? "로그아웃" : "로그인"}</a>
      </li>
      <HomeLink>
        <Link to="/">Home</Link>
      </HomeLink>
      {!hasToken && (
        <li>
          <Link to="auth/register">회원가입</Link>
        </li>
      )}
      {hasToken && (
        <li>
          <Link to="todos">할 일 목록</Link>
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

import token from "../lib/token";

export function useLogout() {
  token.removeToken("token");
  window.location.href = "/";

  return;
}

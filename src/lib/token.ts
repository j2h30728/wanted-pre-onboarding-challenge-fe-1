class Token {
  getToken(key: string) {
    return window.localStorage.getItem(key);
  }

  setToken(key: string, token: string) {
    window.localStorage.setItem(key, token);
  }

  removeToken(key: string) {
    window.localStorage.removeItem(key);
  }
}
export default new Token();

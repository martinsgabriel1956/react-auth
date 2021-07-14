import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (c) => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  function handleLogin(token) {
    setToken(token);
    localStorage.setItem('token', token);
  };
  
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };
  
  return (
  <AuthContext.Provider {...props} value={contextValue}>
    {props.children}
  </AuthContext.Provider>
    );
};
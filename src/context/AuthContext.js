import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (c) => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  function handleLogin(token) {
    setToken(token);
  };

  function handleLogout() {
    setToken(null);
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
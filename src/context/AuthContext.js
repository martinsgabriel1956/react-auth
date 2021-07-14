import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (c) => {},
  logout: () => {},
});

function calculateRemainingTime(expirationTime) {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export function AuthContextProvider(props) {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  }
  
  function handleLogin(token, expirationTime) {
    setToken(token);
    localStorage.setItem('token', token);

    const remainingTime = calculateRemainingTime(expirationTime);


    setTimeout(handleLogout, remainingTime);
  };

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
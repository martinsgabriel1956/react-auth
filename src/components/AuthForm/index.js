import { useContext, useRef, useState } from "react";

import { Container, Control, Actions, ToggleButton } from "./styles";

import { AuthContext } from '../../context/AuthContext';

export function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleSwitchAuthMode() {
    setIsLogin((prevState) => !prevState);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoading(true);

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIfWrde8TkiZmWittDscqthJfUMkVswIU`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIfWrde8TkiZmWittDscqthJfUMkVswIU`;
    }
    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";

          // if(data && data.error && data.error.message) errorMessage = data.error.message;

          throw new Error(errorMessage);
        });
      }
    })
    .then(data => {
      login(data.idToken);
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  return (
    <Container>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <Control>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" required />
        </Control>
        <Control>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </Control>
        <Actions>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <ToggleButton type="button" onClick={handleSwitchAuthMode}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </ToggleButton>
        </Actions>
      </form>
    </Container>
  );
}

import { useRef, useState } from 'react';

import { Container, Control, Actions, ToggleButton } from './styles';

export function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleSwitchAuthMode() {
    setIsLogin((prevState) => !prevState);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoading(true);
    
    if (isLogin) {
      
    } else {
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIfWrde8TkiZmWittDscqthJfUMkVswIU`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
          
        }
      }).then(res => {
        setIsLoading(false);
        if(res.ok) {

        } else {
          return res.json().then(data => {
            let errorMessage = "Authentication failed!";

            // if(data && data.error && data.error.message) errorMessage = data.error.message;

            alert(errorMessage);
          })
        }
      })
    };
  };

  return (
    <Container>
       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <Control>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </Control>
        <Control>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </Control>
        <Actions>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <ToggleButton
            type='button'
            onClick={handleSwitchAuthMode}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </ToggleButton>
        </Actions>
      </form>
    </Container>
  );
};


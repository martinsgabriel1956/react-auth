import { useState } from 'react';
import { Container, Control, Actions, ToggleButton } from './styles';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <Container>
       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <Control>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </Control>
        <Control>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </Control>
        <Actions>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
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


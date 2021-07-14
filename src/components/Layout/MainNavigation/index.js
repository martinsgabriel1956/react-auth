import { Link } from 'react-router-dom';
import { Container, Logo } from './styles';

export function MainNavigation() {
  return (
    <Container>
     <Link to='/'>
        <Logo>React Auth</Logo>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
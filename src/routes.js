import { BrowserRouter, Switch, Router } from 'react-router-dom';

import { Home } from './pages/Home';

import './styles/global.css';

export function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Router path="/" component={Home} />
      </Switch>  
    </BrowserRouter>
  );
}
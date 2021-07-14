import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";

import { Layout } from "./components/Layout";
import { AuthContext } from "./context/AuthContext";

export function Routes() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          {!authCtx.isLoggedIn && <Route path="/auth" component={Auth} />}
          <Route path="/profile">
            {authCtx.isLoggedIn && <Profile />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

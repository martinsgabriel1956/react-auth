import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";

import { Layout } from "./components/Layout";

export function Routes() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </>
  );
}

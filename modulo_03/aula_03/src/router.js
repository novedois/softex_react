import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { Home, About, Contact } from "./pages";
import { ROUTES } from "./constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.CONTACT} component={Contact} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

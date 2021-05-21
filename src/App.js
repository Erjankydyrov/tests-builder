import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Auth from "./components/Auth/Auth";
import BunsBuilder from "./components/BunsBuilder/BunsBuilder";
import Checkout from "./components/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import Logout from "./components/Logout/Logout";
import Orders from "./components/Orders/Orders";
import { restore } from "./store/actions/auth";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={BunsBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact component={BunsBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        <h1>Sweet bakery</h1>
        { routesOutput}
      </Layout>
    </div>
  );
}

export default App;

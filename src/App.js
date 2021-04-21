import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import BunsBuilder from "./components/BunsBuilder/BunsBuilder";
import Checkout from "./components/Checkout/Checkout";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Sweet bakery</h1>
        <Switch>
          <Route path="/" component={BunsBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

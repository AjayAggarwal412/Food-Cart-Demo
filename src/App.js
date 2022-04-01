import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Checkout">
            <Checkout />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;

import Home from "./components/Home";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [button, setButton] = useState(false);

  const handleClick = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].value += d;

    if (arr[ind].value === 0) arr[ind].value = 1;
    setCart([...arr]);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.value * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            handleClick={handleClick}
            cart={cart}
            handleChange={handleChange}
            handleRemove={handleRemove}
            price={price}
          />
        </Route>

        <Route path="/Checkout">
          <Checkout
            cart={cart}
            handleChange={handleChange}
            handleRemove={handleRemove}
            price={price}
          />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

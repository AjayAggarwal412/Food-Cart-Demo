import Home from "./components/Home";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  HashRouter,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import data from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const { items } = data;

  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  const onAdd = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const onDecrement = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <Router>
      <HashRouter>
        <Route path="/" exact>
          <Home
            cart={cart}
            items={items}
            onAdd={onAdd}
            onRemove={onRemove}
            onDecrement={onDecrement}
            itemsPrice={itemsPrice}
          />
        </Route>

        <Route path="/Checkout">
          <Checkout
            cart={cart}
            onAdd={onAdd}
            onRemove={onRemove}
            onDecrement={onDecrement}
            itemsPrice={itemsPrice}
          />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </HashRouter>
    </Router>
  );
}

export default App;

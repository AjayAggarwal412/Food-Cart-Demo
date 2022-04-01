import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Checkout from "./Checkout";

function Button(props) {
  const { isEmpty } = useCart();
  const [renderCheckout, setRenderCheckout] = React.useState(false);

  return (
    <div className="checkout">
      {!isEmpty && (
        <Link to={"/Checkout"}>
          <button
            className="success"
            onClick={() => {
              setRenderCheckout(true);
            }}
          >
            Checkout
          </button>
        </Link>
      )}

      {renderCheckout && <Checkout ajay={props.item} />}
    </div>
  );
}

export default Button;

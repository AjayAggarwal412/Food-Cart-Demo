import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

function Button() {
  const [renderCheckout, setRenderCheckout] = useState(false);

  return (
    <div className="checkout">
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

      {renderCheckout && <Checkout />}
    </div>
  );
}

export default Button;

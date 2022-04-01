import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import { useCart } from "react-use-cart";

function Order() {
  const time = new Date().toLocaleString();

  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <div>
      <h2>Order</h2>
      <p>{time}</p>
      <hr />

      <h5>Total Items: ({totalItems})</h5>

      {items.map((item, index) => {
        return (
          <>
            <div key={index}>
              <img src={item.image} className="image" />
              <strong className="name">{item.name}</strong>

              <button
                className="decrement "
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>
              {item.quantity}
              <button
                className="increment "
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity + 1);
                }}
              >
                +
              </button>
              <div className="remove">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        );
      })}

      {!isEmpty && (
        <div className="total">
          Total price
          <span style={{ float: "right" }}>Rs.{cartTotal}</span>
        </div>
      )}
    </div>
  );
}

export default Order;

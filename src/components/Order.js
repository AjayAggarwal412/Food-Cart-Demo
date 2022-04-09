import React from "react";
import "./Order.css";

function Order(props) {
  const { cart, itemsPrice, onAdd, onRemove, onDecrement } = props;
  const time = new Date().toLocaleString();

  return (
    <div>
      <h2>Order</h2>
      <p>{time}</p>
      <hr />

      {cart.map((item, index) => {
        return (
          <>
            <div key={index}>
              <img src={item.image} className="image" />
              <strong className="name">{item.name}</strong>

              <button className="decrement " onClick={() => onDecrement(item)}>
                -
              </button>

              {item.qty}

              <button className="increment " onClick={() => onAdd(item)}>
                +
              </button>
              <div className="remove">
                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        );
      })}

      <div className="total">
        Total price
        <span style={{ float: "right" }}>Rs.{itemsPrice}</span>
      </div>
    </div>
  );
}

export default Order;

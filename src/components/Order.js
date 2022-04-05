import React, { useState, useEffect } from "react";
import "./Order.css";

function Order({ cart, handleChange, price, handleRemove }) {
  const time = new Date().toLocaleString();

  return (
    <div>
      <h2>Order</h2>
      <p>{time}</p>
      <hr />

      {/* 
      <h5>Total Items: {() => totalItemHandler()}</h5> */}

      {cart.map((item, index) => {
        return (
          <>
            <div key={index}>
              <img src={item.image} className="image" />
              <strong className="name">{item.name}</strong>

              <button
                className="decrement "
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>

              {item.value}

              <button
                className="increment "
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
              <div className="remove">
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
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
        <span style={{ float: "right" }}>Rs.{price}</span>
      </div>
    </div>
  );
}

export default Order;

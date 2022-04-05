import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { ListGroup } from "react-bootstrap";

function Checkout({ cart, handleChange, price, handleRemove }) {
  return (
    <div>
      <div className="homepage">
        <Link to="/">Go to homepage</Link>
      </div>

      {cart.map((item, index) => {
        return (
          <ListGroup horizontal key={index}>
            <ListGroup.Item>
              <img src={item.image} className="image_check" />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong className="name_">{item.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong className="name_">Rs.{item.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <button
                className="decrement_"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>

              <strong className="">{item.value}</strong>

              <button
                className="increment_"
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="remove_">
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}

      <div className="total_">
        Total price:
        <span> Rs.{price}</span>
      </div>
    </div>
  );
}

export default Checkout;

//<img src={item.image} className="image_check" />

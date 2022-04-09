import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { ListGroup } from "react-bootstrap";

function Checkout(props) {
  const { cart, onAdd, onRemove, itemsPrice, onDecrement } = props;

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
              <button className="decrement_" onClick={() => onDecrement(item)}>
                -
              </button>

              <strong className="">{item.qty}</strong>

              <button className="increment_" onClick={() => onAdd(item)}>
                +
              </button>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="remove_">
                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}

      {cart.length == 0 ? (
        <div className="_empty">Oops, Nothing on Checkout Page!</div>
      ) : (
        <div className="total_">
          Total price:
          <span> Rs.{itemsPrice}</span>
        </div>
      )}
    </div>
  );
}

export default Checkout;

//<img src={item.image} className="image_check" />

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Checkout.css";
import { ListGroup } from "react-bootstrap";

function Checkout() {
  const { items, cartTotal, removeItem, isEmpty, updateItemQuantity } =
    useCart();

  return (
    <div>
      <div className="homepage">
        <Link to="/">Go to homepage</Link>
      </div>

      {items.map((item, index) => {
        return (
          <ListGroup horizontal>
            <ListGroup.Item>
              <img src={item.image} className="image_check" />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong className="name_">{item.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong className="name_">Rs.{item.itemTotal}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <button
                className="decrement_"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>

              <strong className="">{item.quantity}</strong>

              <button
                className="increment_"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity + 1);
                }}
              >
                +
              </button>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="remove_">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}

      {!isEmpty && (
        <div className="total_">
          Total price:
          <span> Rs.{cartTotal}</span>
        </div>
      )}
    </div>
  );
}

export default Checkout;

//<img src={item.image} className="image_check" />

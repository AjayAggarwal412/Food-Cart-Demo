import React, { useState } from "react";
import "./FoodCard.css";
import { Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { FaRegHeart } from "react-icons/fa";

const myStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  height: 150,
  width: 150,
  marginTop: 10,
};

const myStyle1 = {
  margin: 20,
};

function FoodCard(props) {
  const { addItem, items } = useCart();
  const [iconColor, setIconColor] = useState("black");

  return (
    <>
      <div className="row">
        <div className="">
          <Card style={{ backgroundColor: `${props.color}`, margin: "10px" }}>
            <Card.Title style={myStyle1}>
              <div>
                <span className="rating"> {props.rating}⭐</span>

                <span style={{ float: "right" }}>
                  <button
                    className="button"
                    onClick={() => {
                      addItem(props.item);
                    }}
                  >
                    <FaRegHeart
                      style={{ outline: "none", color: iconColor }}
                      onClick={() => setIconColor("Crimson")}
                    />
                  </button>
                </span>
              </div>
            </Card.Title>

            <Card.Img
              variant="top"
              src={props.image}
              style={myStyle}
              className="image"
            />

            <Card.Body>
              <Card.Text>
                <div className="Food">
                  {props.name}
                  <span
                    style={{
                      float: "right",
                      backgroundColor: "white",
                      borderRadius: "25px",
                      padding: "8px",
                    }}
                  >
                    {props.qty}
                  </span>
                </div>
                <div className="Food">Rs.{props.price}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FoodCard;

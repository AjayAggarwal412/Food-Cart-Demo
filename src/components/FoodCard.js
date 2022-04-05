import React, { useState } from "react";
import "./FoodCard.css";
import { Card } from "react-bootstrap";
// import { useCart } from "react-use-cart";
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

function FoodCard({ item, handleClick }) {
  const { id, image, price, name, rating, qty, color } = item;

  const [iconColor, setIconColor] = useState("black");

  return (
    <>
      <div className="row">
        <div className="">
          <Card style={{ backgroundColor: `${color}`, margin: "10px" }}>
            <Card.Title style={myStyle1}>
              <div>
                <span className="rating"> {rating}⭐</span>

                <span style={{ float: "right" }}>
                  <button
                    className="button"
                    onClick={() => {
                      handleClick(item);
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
              src={image}
              style={myStyle}
              className="image"
            />

            <Card.Body>
              <Card.Text>
                <div className="Food">
                  {name}
                  <span
                    style={{
                      float: "right",
                      backgroundColor: "white",
                      borderRadius: "25px",
                      padding: "8px",
                    }}
                  >
                    {qty}
                  </span>
                </div>
                <div className="Food">Rs.{price}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FoodCard;

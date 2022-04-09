import { React, useEffect, useState } from "react";
import "./Home.css";
import FoodCard from "./FoodCard";
import Order from "./Order";
import data from "../data";
import Button from "./Button";

function Home(props) {
  const { cart, onAdd, onRemove, itemsPrice, items, onDecrement } = props;
  return (
    <>
      <div class="wrapper">
        <article class="main">
          {items.map((item, index) => {
            return <FoodCard key={index} item={item} onAdd={onAdd} />;
          })}
        </article>

        <aside class="aside aside-1">
          <div className="sort">
            Sort by: &nbsp;
            <span>
              <select>
                <option value="1">Rating</option>
                <option value="2">Price</option>
                <option value="3">Name</option>
              </select>
            </span>
          </div>
        </aside>

        <aside class="aside aside-2">
          <Order
            cart={cart}
            itemsPrice={itemsPrice}
            onAdd={onAdd}
            onRemove={onRemove}
            onDecrement={onDecrement}
          />
          <Button />
        </aside>
      </div>
    </>
  );
}

export default Home;

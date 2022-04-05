import { React, useEffect, useState } from "react";
import "./Home.css";
import FoodCard from "./FoodCard";
import Order from "./Order";
import data from "../data";
import Button from "./Button";

function Home({ handleClick, cart, handleChange, handleRemove, price }) {
  return (
    <>
      <div class="wrapper">
        <article class="main">
          {data.items.map((item, index) => {
            return (
              <FoodCard key={index} item={item} handleClick={handleClick} />
            );
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
            handleChange={handleChange}
            handleRemove={handleRemove}
            price={price}
          />
          <Button />
        </aside>
      </div>
    </>
  );
}

export default Home;

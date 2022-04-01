import { React } from "react";
import "./Home.css";
import FoodCard from "./FoodCard";
import Order from "./Order";
import data from "../data";
import Button from "./Button";

function Home() {
  return (
    <>
      <div class="wrapper">
        <article class="main">
          {data.items.map((item, index) => {
            return (
              <FoodCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
                qty={item.qty}
                item={item}
                color={item.color}
              />
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
          <Order />
          <Button item={data.items} />
        </aside>
      </div>
    </>
  );
}

export default Home;

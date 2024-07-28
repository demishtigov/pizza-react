import React, { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://66a62f9d23b29e17a1a1f5a3.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((listItems) => {
        setPizzas(listItems);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((item) => {
          return <PizzaBlock key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setChangeSort } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);
  console.log(categoryId);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (sortItem) => {
    dispatch(setChangeSort(sortItem));
  };

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : "";
    const sortQuery = `sortBy=${sort.sortProperty}&order=desc`; // Adjust based on your API
    axios
      .get(
        `https://66a62f9d23b29e17a1a1f5a3.mockapi.io/items?${categoryQuery}&${sortQuery}`
      )
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} onChangeSort={onChangeSort} />
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

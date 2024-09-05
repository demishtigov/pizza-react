import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setChangeSort } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/thunks/pizzaThunks";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/sceleton";
import { RootState, AppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sort = useSelector((state: RootState) => state.filter.sort);
  const searchInput = useSelector((state: RootState) => state.filter.searchInput);
  const pizzas = useSelector((state: RootState) => state.pizza.items);
  const status = useSelector((state: RootState) => state.pizza.status);
  const error = useSelector((state: RootState) => state.pizza.error);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (sortItem: { name: string; sortProperty: string }) => {
    dispatch(setChangeSort(sortItem));
  };

  useEffect(() => {
    dispatch(fetchPizzas({ categoryId, sort }));
    window.scrollTo(0, 0);
  }, [categoryId, sort, dispatch]);

  const filteredItems = pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? (
          Array(10)
            .fill(0)
            .map((_, index) => <Sceleton key={index} />)
        ) : status === "succeeded" ? (
          filteredItems.map((item) => {
            return <PizzaBlock key={item.id} {...item} />;
          })
        ) : status === "failed" ? (
          <div>Error: {error}</div>
        ) : null}
      </div>
    </>
  );
};

export default Home;

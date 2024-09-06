import React from "react";
import { Link } from "react-router-dom";
import styles from "./emptyCart.module.scss";

const EmptyCart: React.FC = () => {
  return (
    <div className={styles.emptyCart}>
      <h2>Ваша корзина пуста 😔</h2>
      <p>Похоже, вы еще не добавили ни одной пиццы в корзину.</p>
      <Link to="/" className="button button--black">
        Вернуться в меню
      </Link>
    </div>
  );
};

export default EmptyCart;

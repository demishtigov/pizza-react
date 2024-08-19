import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG paths */}
          </svg>
          <span>Корзина</span>
        </h2>
        <div className="cart__clear">
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        {items.map((item) => (
          <div className="cart__item" key={item.id}>
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src={item.imageUrl}
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>{item.title}</h3>
              <p>
                {item.type}, {item.size} см.
              </p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths */}
                </svg>
              </div>
              <b>{item.addedItemsCount}</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths */}
                </svg>
              </div>
            </div>
            <div className="cart__item-price">
              <b>{item.price * item.addedItemsCount} ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths */}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Всего пицц: <b>{totalCount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link
            to="/"
            className="button button--outline button--add go-back-btn"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths */}
            </svg>
            <span>Вернуться назад</span>
          </Link>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

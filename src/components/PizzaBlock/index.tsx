import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

interface PizzaBlockProps {
  id: number;
  title: string;
  imageUrl: string;
  types: number[];
  sizes: number[];
  price: number;
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  imageUrl,
  types,
  sizes,
  price,
}) => {
  const dispatch = useDispatch();
  const typesName = ["Тонкое", "Традиционное"];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  // Получаем количество элементов в корзине
  const itemCount = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  });

  const addClick = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: typesName[activeType],
      size: sizes[activeSize],
      quantity: 1, // Добавляем свойство quantity
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((itemId, i) => (
              <li
                key={i}
                onClick={() => setActiveType(itemId)}
                className={activeType === itemId ? "active" : ""}
              >
                {typesName[itemId]}
              </li>
            ))}
          </ul>

          <ul>
            {sizes.map((size, id) => (
              <li
                key={id}
                onClick={() => setActiveSize(id)}
                className={activeSize === id ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{`от ${price}`}</div>
          <div
            onClick={addClick}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {itemCount > 0 && <i>{itemCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;

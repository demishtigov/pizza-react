import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setChangeSort } from "../redux/slices/filterSlice";

interface SortItem {
  name: string;
  sortProperty: string;
}

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sortList: SortItem[] = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "name" },
  ];
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

  const toggleSort = () => setOpen(!open);

  const select = (i: number) => {
    setSelectedSort(i);
    dispatch(setChangeSort(sortList[i]));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={toggleSort}>{sortList[selectedSort].name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => select(i)}
                className={selectedSort === i ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

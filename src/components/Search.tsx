// src/components/Search.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../redux/slices/filterSlice";
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(event.target.value));
  };

  const debouncedHandleChangeInput = debounce(handleChangeInput, 500);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск..."
        onChange={debouncedHandleChangeInput}
        className="search-input"
      />
      <style>{`
        .search {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 20px;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 10px 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #fe5f1e;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
          outline: none;
        }

        .search-input::placeholder {
          color: #aaa;
        }
      `}</style>
    </div>
  );
};

export default Search;

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
      />
    </div>
  );
};

export default Search;

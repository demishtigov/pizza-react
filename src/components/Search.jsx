import { useDispatch } from "react-redux";
import { setSearchInput } from "../redux/slices/filterSlice";

import debounce from "lodash.debounce";

const Search = () => {
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  const debouncedHandleCnahgeInput = debounce(handleChangeInput, 500);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск..."
        onChange={debouncedHandleCnahgeInput}
      />
    </div>
  );
};

export default Search;

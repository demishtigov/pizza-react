import { useDispatch } from "react-redux";
import { setSearchInput } from "../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  return (
    <div className="search">
      <input type="text" placeholder="Поиск..." onChange={handleChangeInput} />
    </div>
  );
};

export default Search;

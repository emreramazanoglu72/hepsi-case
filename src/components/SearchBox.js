import { FilterContext } from "context/FilterProvider";
import { PaginationContext } from "context/PaginationProvider";
import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { resetPage } = useContext(PaginationContext);

  const searchAction = (input) => {
    var text = input.target.value;
    if (text.length > 1) {
      setFilter({
        ...filter,
        filterMap: {
          ...filter.filterMap,
          title: text,
        },
      });
    } else if (text.length === 0) {
      setFilter({
        ...filter,
        filterMap: {
          ...filter.filterMap,
          title: "",
        },
      });
    }
    resetPage();
  };

  return (
    <form
      className="col-12 col-md-7 mb-2 justify-content-center mb-md-0 search mx-auto"
      role="search"
    >
      <BsSearch />
      <input
        type="search"
        className="form-control search-input"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        aria-label="Search"
        onChange={searchAction}
      />
    </form>
  );
};

export default SearchBox;

import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "service";
import { PaginationContext } from "./PaginationProvider";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { page } = useContext(PaginationContext);
  const [filter, setFilter] = useState({
    limit: page.listItem,
    offset: page.activePage,
    filterMap: {
      title: "",
      color: "",
      brand: "",
      orderByPrice: false,
      orderByTitle: false,
    },
  });

  const [filterList, setFilterList] = useState({
    sorting: [],
    color: [],
    brand: [],
  });

  const { data, isLoading } = useFetch({
    path: "/filterlist",
  });

  useEffect(() => {
    if (!isLoading) {
      setFilterList(data);
    }
  }, [isLoading]);

  const state = {
    filter,
    setFilter,
    filterList,
  };
  return (
    <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;

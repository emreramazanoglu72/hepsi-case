import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "service";
import { FilterContext } from "./FilterProvider";
import { PaginationContext } from "./PaginationProvider";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PaginationContext);
  const [config, setConfig] = useState({
    method: "POST",
    body: JSON.stringify(filter),
  });
  const { data, isLoading, reloadData } = useFetch({
    path: `/`,
    config,
  });

  useEffect(() => {
    setConfig({ ...config, body: JSON.stringify(filter) });
    if(!isLoading){
      reloadData();
    }
  }, [filter]);

  useEffect(() => {
    if (!isLoading) {
      setPage({ ...page, pageCount: data.totalCount / page.listItem });
    }
  }, [isLoading]);


  const state = {
    ProductList: data,
    ProductLoading: isLoading,
    ProductReLoad: reloadData,
  };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

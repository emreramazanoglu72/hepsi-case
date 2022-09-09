import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { Products } from "utils";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  const [basketList, _setBasketList] = useState([]);
  const [productList, setProductList] = useState(Products);
  const [filterProduct, setFilterProduct] = useState([]);
  const [page, setPage] = useState({
    pageCount: 1,
    listItem: 12,
    activePage: 1,
  });

  const [filter, setFilter] = useState({
    search: "",
    color: "",
    brand: "",
    sort: false,
  });

  const [basketListStore, setBasketList] = useLocalStorage("basket-list");

  const resetPage = () => {
    setPage({
      pageCount: 1,
      listItem: 12,
      activePage: 1,
    });
  };

  const getStore = () => {
    _setBasketList(basketListStore ? JSON.parse(basketListStore) : []);
    setPage({
      pageCount: 0,
      listItem: 12,
      activePage: 1,
    });
  };

  useEffect(() => {
    setPage({ ...page, pageCount: Math.ceil(filterProduct.length / 12) });
  }, [page.pageCount]);

  const addBasket = (item) => {
    basketList.push(item);
    setBasketList(JSON.stringify(basketList));
  };

  const removeBasketItem = (id) => {
    const newList = basketList.filter((filter) => filter.id !== id);
    _setBasketList(newList);
    setBasketList(JSON.stringify(newList));
  };

  useEffect(getStore, []);

  useEffect(() => {
    setFilterProduct(
      productList
        .filter((item) =>
          item.title.toUpperCase().includes(filter.search.toUpperCase())
        )
        .filter((item) => item.color.includes(filter.color))

        .filter((item) => item.brand.includes(filter.brand))
    );
    var _filterProduct = [];
    switch (filter.sort) {
      case true:
        _filterProduct = filterProduct
          .sort((a, b) => a.priceDefault - b.priceDefault)
          .reverse();
        setFilterProduct(_filterProduct);
        break;

      case "(A>Z)":
        _filterProduct = filterProduct.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setFilterProduct(_filterProduct);

        break;

      case "(Z>A)":
        _filterProduct = filterProduct
          .sort((a, b) => a.title.localeCompare(b.title))
          .reverse();
        setFilterProduct(_filterProduct);
        break;
      default:
        break;
    }
    setPage({ ...page, pageCount: filterProduct.length / page.listItem });
  }, [filter]);

  const state = {
    basketList,
    addBasket,
    removeBasketItem,
    filterProduct,
    productList,
    setProductList,
    filter,
    setFilter,
    language,
    setLanguage,
    page,
    setPage,
    resetPage,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;

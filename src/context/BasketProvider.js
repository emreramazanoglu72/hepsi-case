import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketList, _setBasketList] = useState([]);
  const [basketListStore, setBasketList] = useLocalStorage("basket-list");
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  const getStore = () => {
    _setBasketList(basketListStore ? JSON.parse(basketListStore) : []);
  };

  useEffect(getStore, []);

  const addBasket = (item) => {
    basketList.push(item);
    setBasketList(JSON.stringify(basketList));
  };

  const removeBasketItem = (id) => {
    const newList = basketList.filter((filter) => filter.id !== id);
    _setBasketList(newList);
    setBasketList(JSON.stringify(newList));
  };

  const state = {
    basketList,
    addBasket,
    removeBasketItem,
    deleteModalShow,
    setDeleteModalShow,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;

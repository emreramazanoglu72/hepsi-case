import React, { createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [page, setPage] = useState({
    pageCount: 1,
    listItem: 12,
    activePage: 1,
  });

  const resetPage = () => {
    setPage({
      pageCount: 1,
      listItem: 12,
      activePage: 1,
    });
  };

  const state = {
    page,
    setPage,
    resetPage,
  };
  return (
    <PaginationContext.Provider value={state}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;

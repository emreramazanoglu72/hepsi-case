import { FilterContext } from "context/FilterProvider";
import { PaginationContext } from "context/PaginationProvider";
import React, { useContext, useEffect } from "react";

const Pagination = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setPage, page } = useContext(PaginationContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page.activePage]);

  const paginationButton = [];
  const pageChange = (index) => {
    setPage({ ...page, activePage: index + 1 });
    setFilter({ ...filter, offset: index + 1 });
  };
  for (let index = 0; index < page.pageCount; index++) {
    paginationButton.push(
      <button
        onClick={() => pageChange(index)}
        key={index}
        className={`item ${index + 1 === page.activePage ? "active" : ""}`}
      >
        {index + 1}
      </button>
    );
  }


  const nextPage = () => {
    setPage({
      ...page,
      activePage:
        page.activePage === page.pageCount
          ? page.pageCount
          : page.activePage + 1,
    });
    setFilter({ ...filter, offset: page.activePage + 1 });
  };

  const backPage = () => {
    setPage({
      ...page,
      activePage: page.activePage === 1 ? 1 : page.activePage - 1,
    });
    setFilter({ ...filter, offset: page.activePage + 1 });
  };

  if (page.pageCount == 1 || page.pageCount < 1) {
    return null;
  }
  return (
    <div className="pagination">
      <button
        onClick={() => {
         backPage();
        }}
        className="item"
      >
        {"<"}
      </button>
      {paginationButton.map((item) => item)}
      <button
      disabled={page.pageCount == 1}
        onClick={() => {
          nextPage();
        }}
        className="item"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

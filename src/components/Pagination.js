import React, { useContext, useEffect } from "react";
import { AppContext } from "context/AppProvider";

const Pagination = () => {
  const { page, setPage } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page.activePage]);
  const paginationButton = [];

  for (let index = 0; index < page.pageCount; index++) {
    paginationButton.push(
      <button
        onClick={() => setPage({ ...page, activePage: index + 1 })}
        key={index}
        className={`item ${index + 1 === page.activePage ? "active" : ""}`}
      >
        {index + 1}
      </button>
    );
  }

  if (page.pageCount === 0) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        onClick={() =>
          setPage({
            ...page,
            activePage: page.activePage === 1 ? 1 : page.activePage - 1,
          })
        }
        className="item"
      >
        {"<"}
      </button>
      {paginationButton.map((item) => item)}
      <button
        onClick={() =>
          setPage({
            ...page,
            activePage:
              page.activePage === page.pageCount
                ? page.pageCount
                : page.activePage + 1,
          })
        }
        className="item"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

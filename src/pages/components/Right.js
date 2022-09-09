import React, { useContext } from "react";
import ProductCard from "components/Cards/ProductCard";
import Filter from "components/Filter";
import NoResult from "components/NoResult";
import Pagination from "components/Pagination";
import { AppContext } from "context/AppProvider";

const Right = () => {
  const { filterProduct, page } = useContext(AppContext);

  return (
    <React.Fragment>
      <div className="filter">
        <Filter />
      </div>
      <div className="product-list">
        <div className="list">
          {filterProduct.length === 0 && <NoResult />}
          {filterProduct
            .slice(page.activePage, page.listItem + page.activePage)
            .map((item, key) => (
              <ProductCard detail={item} key={key} />
            ))}
        </div>
        <Pagination />
      </div>
    </React.Fragment>
  );
};

export default Right;

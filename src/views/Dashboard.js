import ProductCard from "components/Cards/ProductCard";
import Filter from "components/Filter";
import Container from "components/layouts/Container";
import Draver from "components/layouts/Drawer";
import NoResult from "components/NoResult";
import Pagination from "components/Pagination";
import { ProductContext } from "context/ProductProvider";
import React, { useContext } from "react";
import FilterSelect from "components/FilterSelect";

const Dashboard = () => {
  const { ProductList } = useContext(ProductContext);
  return (
    <Container>
      <div className="container">
        <div className="content-top">
          <div className="search-area">
            <div className="search-key">
              <h1>iPhone iOS cep telefonu</h1>
              <span>
                Aranacak Kelime: <span>iphone 11</span>
              </span>
            </div>
            <div className="dropdown">
              <FilterSelect />
            </div>
            <div className="mobile-filter">
              <Draver
                title="Filtrele"
                className="btn btn-default position-relative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="left-item">
            <div className="left">
              <Filter />
            </div>
          </div>
          <div className="right-item">
            {ProductList?.resultCount === 0 && <NoResult />}
            {ProductList?.resultSet.map((item, key) => (
              <ProductCard key={key} detail={item} />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </Container>
  );
};

export default Dashboard;

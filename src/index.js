import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BasketProvider from "context/BasketProvider";
import PaginationProvider from "context/PaginationProvider";
import FilterProvider from "context/FilterProvider";
import ProductProvider from "context/ProductProvider";
import "./assets/css/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketProvider>
    <PaginationProvider>
      <FilterProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </FilterProvider>
    </PaginationProvider>
  </BasketProvider>
);

reportWebVitals();

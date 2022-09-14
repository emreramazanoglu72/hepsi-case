import BasketButton from "components/BasketButton";
import SearchBox from "components/SearchBox";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a
            href="#"
            className="d-flex align-items-center col-auto mb-2 mb-md-0 logo text-decoration-none me-md-auto"
          >
            <img src="/assets/image/logo.svg" className="logo" />
          </a>
          <SearchBox />
          <BasketButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

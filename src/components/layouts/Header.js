import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <img src="assets/image/logo.png" alt="" className="logo" />
          <Menu />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

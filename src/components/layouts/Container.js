import BacktoTop from "components/BacktoTop";
import React from "react";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">{children}</div>
      <BacktoTop />
    </React.Fragment>
  );
};

export default Container;

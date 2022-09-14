import BacktoTop from "components/BacktoTop";
import DeleteModal from "components/Modals/DeleteModal";
import React from "react";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="">{children}</div>
      </main>
      <DeleteModal show={true} closeModal={() => {}} deleteItem={1} />
      <BacktoTop />
    </React.Fragment>
  );
};

export default Container;

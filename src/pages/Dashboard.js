import React from "react";
import { useTranslation } from "react-i18next";
import Container from "components/layouts/Container";
import Banner from "./components/Banner";
import Left from "./components/Left";
import Right from "./components/Right";
import BrandList from "./components/BrandList";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Banner />
      <BrandList />
      <div className="result-head">
        <div className="right">
          <h3>iPhone iOS cep telefonu</h3>
          <span>
            {t("global.searchKeyword")}: <b>iphone 11</b>
          </span>
        </div>
        <Left />
      </div>
      <div className="result-container">
        <Right />
      </div>
    </Container>
  );
};

export default Dashboard;

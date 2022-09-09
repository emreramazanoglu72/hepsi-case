import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components/Buttons";

const BasketItem = ({ detail, openModal }) => {
  const { t } = useTranslation();
  const { image, title, brand, color, id } = detail;
  return (
    <div className="basket-item">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <div className="detail">
        <div className="d-flex justify-content-between">
          <p className="title mtb-auto">{title.substring(0, 49)}</p>
          <Button
            onClick={() => openModal(id)}
            type="outline-danger"
            className="mtb-auto"
          >
            {t("global.remove")}
          </Button>
        </div>
        <p className="title">
          <b>{t("global.brand")}:</b> {brand}
        </p>
        <p className="title">
          <b>{t("global.color")}:</b> {color}
        </p>
      </div>
    </div>
  );
};

export default BasketItem;

import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "context/AppProvider";
import { Button } from "components/Buttons";

const ProductCard = ({ detail }) => {
  const { t } = useTranslation();
  const { basketList, addBasket } = useContext(AppContext);
  const { id, title, image, price, color, brand, stock, croseRate } = detail;
  const ref = useRef();
  const pressButton = () => addBasket(detail);
  let disabledButton = basketList.filter((filter) => filter.id === id);
  disabledButton = disabledButton.length !== 0;
  return (
    <div ref={ref} className="productCard">
      <div className="card-item">
        <div className="cardImage">
          <img src={image} alt="" />
        </div>
        <div className="cardBody">
          <h4 className="title">
            {title} - {id}
          </h4>
          <p className="type">
            <b>{t("global.brand")}:</b> {brand}
          </p>
          <p className="type">
            <b>{t("global.color")}:</b> {color}
          </p>
          <p className="price">
            {croseRate === 0 ? price : price / croseRate}₺
          </p>
          {croseRate !== 0 && (
            <div className="crose">
              <p className="crose-price">{price}</p>
              {croseRate && <span className="crose-rate">{croseRate}%</span>}
            </div>
          )}
          <Button
            onClick={pressButton}
            type={
              stock === 0 ? "disabled" : disabledButton ? "disabled" : "basket"
            }
            className="btnn"
            disabled={disabledButton}
          >
            {stock !== 0
              ? disabledButton
                ? t("global.noAddedBasket")
                : t("global.addBasket")
              : t("global.noAddedBasket")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

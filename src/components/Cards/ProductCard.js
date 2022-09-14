import { BasketContext } from "context/BasketProvider";
import React, { useContext } from "react";
import { crosePriceFormat, priceFormat } from "utils";

const ProductCard = ({ detail }) => {
  const { basketList, addBasket } = useContext(BasketContext);
  const { id, title, image, price, color_name, brand_name, stock, crose_rate } = detail;
  const pressButton = () => addBasket(detail);
  let disabledButton = basketList.filter((filter) => filter.id === id);
  disabledButton = disabledButton.length !== 0;

  var totalPrice = crosePriceFormat(price, crose_rate);

  var totalCrosePrice = priceFormat(price);
  return (
    <div className="item">
      <div className="card">
        <div className="head">
          <img src={image} alt={title} />
        </div>
        <p className="title">{title}</p>
        <div className="body">
          <div className="features">
            <p className="desc">
              <span>Marka:</span> {brand_name}
            </p>
            <p className="desc">
              <span>Renk:</span> {color_name}
            </p>
          </div>
          <div className="price">
            <p>{totalPrice}₺</p>
            {crose_rate !== 0 && (
              <span>
                <span className="discount-price">{totalCrosePrice} TL </span>
                <span>{crose_rate}%</span>
              </span>
            )}
          </div>
          <button
            onClick={pressButton}
            className={
              stock === 0
                ? "added-basket"
                : disabledButton
                ? "added-basket"
                : "add-basket"
            }
            disabled={disabledButton}
          >
            {stock !== 0
              ? disabledButton
                ? "Bu ürünü sepete eklemeyemezsiniz"
                : "Sepete Ekle"
              : "Bu ürünü sepete eklemeyemezsiniz"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

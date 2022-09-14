import { BasketContext } from "context/BasketProvider";
import React, { useContext } from "react";
import BasketItem from "./Cards/BasketItem";

const BasketButton = () => {
  const { basketList } = useContext(BasketContext);
  return (
    <div className="col-auto text-end basket">
      <div type="button" className="btn btn-default position-relative">
        Sepetim
        {basketList.length !== 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-basket-item">
            {basketList.length}
          </span>
        )}
        {basketList.length !== 0 && (
          <div className="basket-box">
            <ul>
              {basketList.map((item, key) => (
                <BasketItem detail={item} key={key} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketButton;

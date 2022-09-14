import { BasketContext } from "context/BasketProvider";
import React, { useContext } from "react";

const BasketItem = ({ detail }) => {
  const { setDeleteModalShow } = useContext(BasketContext);
  const { image, title, id } = detail;

  const openModal = () => {
    setDeleteModalShow(id);
  };

  return (
    <li>
      <div className="left">
        <img src={image} alt={title} />
      </div>
      <div className="right">
        <p>{title}</p>
        <button onClick={openModal} className="remove">
          Kaldır
        </button>
      </div>
    </li>
  );
};

export default BasketItem;

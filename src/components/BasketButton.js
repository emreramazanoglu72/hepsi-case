import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsBasket } from "react-icons/bs";
import { MdOutlineCancel, MdOutlineShoppingBasket } from "react-icons/md";
import { AppContext } from "context/AppProvider";
import { Button } from "./Buttons";
import BasketItem from "./Cards/BasketItem";
import DeleteModal from "./Modals/DeleteModal";

const BasketButton = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);

  const [deleteItem, setDeleteItem] = useState(null);
  const { basketList } = useContext(AppContext);

  const openModal = (id) => {
    setDeleteItem(id);
    setDeleteModal(true);
  };

  const closeModal = () => {
    setDeleteItem(null);
    setDeleteModal(false);
  };

  let totalPrice = 0;
  basketList.filter(
    (filter) => (totalPrice =  totalPrice + filter.price)
  );
  totalPrice = new Intl.NumberFormat('tr-TR', { maximumSignificantDigits: 3 }).format(totalPrice);
  const hideMenu = () => {
    setHide(true);
    setTimeout(() => {
      setHide(false);
    }, 500);
  };
 
  return (
    <div className={"basket postion-relative"}>
      {basketList.length !== 0 && (
        <span className="badge">{basketList.length}</span>
      )}
      <Button>
        {t('global.myBasket')}
      </Button>
      {!hide && basketList.length !== 0 && (
        <div className="basket-box">
          <div className="basket-head">
            <p>
              {t("global.basketTotal", {
                length: basketList.length,
                price: totalPrice
              })}
            </p>
            <a href="#">
              <MdOutlineCancel onClick={hideMenu} />
            </a>
          </div>
          <hr className="m-0" />
          <div className="basket-list">
            {basketList.map((item, key) => (
              <BasketItem openModal={openModal} detail={item} key={key} />
            ))}
          </div>
          <div className="basket-footer">
            <a href="/basket">{t("global.viewBasket")}</a>
            <a href="#s" className="btn btn-default d-flex">
              <MdOutlineShoppingBasket />
              {t("global.checkOut")}
            </a>
          </div>
        </div>
      )}
      <DeleteModal
        show={deleteModal}
        closeModal={closeModal}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default BasketButton;

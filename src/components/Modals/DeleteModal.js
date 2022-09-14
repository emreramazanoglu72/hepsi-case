import { BasketContext } from "context/BasketProvider";
import React, { useContext } from "react";

const DeleteModal = () => {
  const { removeBasketItem, deleteModalShow, setDeleteModalShow } =
    useContext(BasketContext);

  const deleteAction = () => {
    removeBasketItem(deleteModalShow);
    setDeleteModalShow(false);
    closeModal();
  };

  const closeModal = () => setDeleteModalShow(false);

  return (
    <div className={`modal ${deleteModalShow !== false ? "show" : "hide"}`}>
      <div className="modal-content">
        <div className="head">
          <p>Ürünü silmek istediğinize emin misiniz?</p>
        </div>
        <div className="body">
          <p>
            Ürünü sepet listenizden kaldırmak istediğinizden emin misiniz?
            Dilerseniz ürünü sepetinizde tutup fiyatı düştüğünde haberdar
            olabilirsiniz.
          </p>
        </div>
        <div className="footer">
          <div className="d-flex">
            <button className="remove" onClick={deleteAction}>
              EVET
            </button>
            <button className="danger" onClick={closeModal}>
              HAYIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

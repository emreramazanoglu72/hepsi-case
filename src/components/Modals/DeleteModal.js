import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "context/AppProvider";
import { Button } from "components/Buttons";

const DeleteModal = ({ show, closeModal, deleteItem }) => {
  const { t } = useTranslation();
  const { removeBasketItem } = useContext(AppContext);

  const deleteAction = () => {
    removeBasketItem(deleteItem);
    closeModal();
  };

  return (
    <div className={`modal ${show ? "show" : "hide"}`}>
      <div className="head">
        <p>{t("global.removeProductMessage")}</p>
        <hr />
      </div>
      <div className="body">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall....
        </p>
      </div>
      <div className="footer">
        <div className="d-flex">
          <Button type="success" onClick={deleteAction}>
            {t("global.yes")}
          </Button>
          <Button type="danger" onClick={closeModal}>
            {t("global.no")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

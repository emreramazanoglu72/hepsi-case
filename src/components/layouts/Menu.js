import React from "react";
import { useTranslation } from "react-i18next";
import { Menus } from "utils";
import BasketButton from "components/BasketButton";
import Language from "components/Language";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menus">
      <MobileMenu />
      <ul>
        {Menus.map((menu, key) => (
          <li key={key}>
            <a href="#">
              <p>{t(`menu.${menu.label}`)}</p>
            </a>
          </li>
        ))}
      </ul>
      <Language />
      <BasketButton />
    </div>
  );
};

export default Menu;

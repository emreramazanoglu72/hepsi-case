import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { Menus } from "utils";
import Hr from "components/Hr";
import Language from "components/Language";

const MobileMenu = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const openandcloseMenu = () => setShowMenu(!showMenu);
  return (
    <React.Fragment>
      <div
        className={
          showMenu ? "mobile-menu show-mobile-menu" : "mobile-menu hide"
        }
      >
        <div className="content">
          <div className="head">
            <img src="assets/image/logo.png" alt="" className="logo" />
            <MdOutlineCancel onClick={openandcloseMenu} />
          </div>
          <Hr />
          <div className="body">
            <Language />

            <ul>
              {Menus.map((menu, key) => (
                <li key={key}>
                  <a href={`#${key}`}>
                    <p>{t(`menu.${menu.label}`)}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="menuIcon" onClick={openandcloseMenu}>
        <BsGrid3X3GapFill />
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;

import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowScroll } from "react-use";

const BacktoTop = () => {
  const {t} = useTranslation();
  const { y } = useWindowScroll();
  const backToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div onClick={backToTop} className={`back-to-top ${y < 500 && "hide"}`}>
      {t('global.backtoTop')}
    </div>
  );
};

export default BacktoTop;

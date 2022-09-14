import React from "react";
import { useWindowScroll } from "react-use";

const BacktoTop = () => {
  const { y } = useWindowScroll();
  const backToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div onClick={backToTop} className={`back-to-top ${y < 100 && "hide"}`}>
      Başa Dön
    </div>
  );
};

export default BacktoTop;

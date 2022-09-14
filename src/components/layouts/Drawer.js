import Filter from "components/Filter";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Draver = ({ title, className }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const openandcloseDrawer = () => setShowDrawer(!showDrawer);
  return (
    <React.Fragment>
      <div className={showDrawer ? "drawer show-drawer" : "drawer hide"}>
        <div className="content">
          <div className="head">
            {title && <div className="title">{title}</div>}
            <MdOutlineCancel onClick={openandcloseDrawer} />
          </div>
          <div className="body">
            <Filter />
          </div>
        </div>
      </div>
      <button className={className} onClick={openandcloseDrawer}>
        {title}
      </button>
    </React.Fragment>
  );
};

export default Draver;

import { Button } from "components/Buttons";
import Filter from "components/Filter";
import Hr from "components/Hr";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Draver = ({ title }) => {
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
          <Hr />
          <div className="body">
            <Filter />
          </div>
        </div>
      </div>
      <Button className="btn-drawer" onClick={openandcloseDrawer}>
        {title}
      </Button>
    </React.Fragment>
  );
};

export default Draver;

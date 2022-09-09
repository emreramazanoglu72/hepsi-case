import React from "react";

const Hr = (props) => {
  return (
    <div
      {...props}
      className={`hr ${props.className ? props.className : ""}`}
    />
  );
};

export default Hr;

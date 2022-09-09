import React from "react";

const ButtonTypes = (type) => {
  switch (type) {
    case "danger":
      return "btn-danger";

    case "success":
      return "btn-success";

    case "outline-danger":
      return "btn-outline-danger";

    case "outline-success":
      return "btn-outline-success";

    case "basket":
      return "btn-basket";

    case "disabled":
      return "btn-disabled";

    default:
      return "btn";
  }
};

const Button = (props) => {
  const { children, type = null, className = "" } = props;

  return (
    <button {...props} className={`${ButtonTypes(type)} ${className}`}>
      {children}
    </button>
  );
};

export { Button };

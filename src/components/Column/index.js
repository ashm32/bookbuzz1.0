import React from "react";

const Column = ({ size, className, children }) => {
  const colClass = `col-${size} ${className}`;
  return <div className={colClass}>{children}</div>;
};

export default Column;

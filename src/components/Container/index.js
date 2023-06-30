import React from "react";
import "./container.css";

const Container = ({ className, children }) => {
  const containerClass = `container ${className}`;
  return <div className={containerClass}>{children}</div>;
};

export default Container;

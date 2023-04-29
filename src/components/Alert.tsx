import React from "react";
import { ReactNode, useState } from "react";

// this interface works as argument of the constructor
interface AlertProps {
  children: ReactNode;
  onClose: () => void; //Once user click the close button, the alert should disapear
}
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      // Close button
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

import React, { Children, ReactNode } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "warning"; //Question mark means this property is optional
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button
      //join 2 className together
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

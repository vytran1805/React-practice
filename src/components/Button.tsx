import React, { Children, ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "warning"; //Question mark means this property is optional
  onClick: () => void;
}
const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

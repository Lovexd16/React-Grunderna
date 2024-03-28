import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onCLick: () => void;
}

const Button = ({ children, onCLick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;

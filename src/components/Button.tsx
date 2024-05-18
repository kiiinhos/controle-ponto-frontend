import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  style?: React.CSSProperties; // Definindo a propriedade de estilo como opcional
}

const Button: React.FC<ButtonProps> = ({ onClick, label, style }) => {
  return (
    <button onClick={onClick} className="btn" style={style}>
      {label}
    </button>
  );
};

export default Button;

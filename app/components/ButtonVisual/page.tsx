import React from 'react';
import './styles.css'

type ButtonProps = {
  label: string;
  onClick: () => void; 
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {label}
    </button>
  );
};

export default Button;

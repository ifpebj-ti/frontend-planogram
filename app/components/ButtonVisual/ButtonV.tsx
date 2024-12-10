import React from 'react';
import './styles.css'

export type ButtonProps = {
  label: string;
  onClick: () => void; 
  className?: string;
};

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {label}
    </button>
  );
};


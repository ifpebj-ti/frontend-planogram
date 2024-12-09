import React from 'react';

interface ButtonProps {
  textobotao: string;
  pressione: () => void;
  corDeFundo: string; 
}

const Button: React.FC<ButtonProps> = ({ textobotao, pressione, corDeFundo }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        background: corDeFundo, 
        boxShadow: '0px 4.8px 4.8px rgba(0, 0, 0, 0.25)',
        borderRadius: '6px',
        border: '1.2px solid rgba(0, 0, 0, 0.46)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(0deg)',
        cursor: 'pointer',
      }}
      onClick={pressione} 
    >
      <span
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#000',
          transform: 'rotate(15deg)', 
          textAlign: 'center',
        }}
      >
        {textobotao}
      </span>
    </div>
  );
};

export default Button;

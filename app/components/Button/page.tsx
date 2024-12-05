import React from 'react';

interface ButtonProps {
  textobotao: string;
  pressione: () => void;
  corDeFundo: string; // Para permitir diferentes cores
}

const Button: React.FC<ButtonProps> = ({ textobotao, pressione, corDeFundo }) => {
  return (
    <div
      style={{
        width: '100px', // Tamanho do botão
        height: '100px',
        background: corDeFundo, // Cor dinâmica
        boxShadow: '0px 4.8px 4.8px rgba(0, 0, 0, 0.25)',
        borderRadius: '6px',
        border: '1.2px solid rgba(0, 0, 0, 0.46)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(0deg)', // Inclinação como na imagem
        cursor: 'pointer',
      }}
      onClick={pressione} // Evento para clique
    >
      <span
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#000',
          transform: 'rotate(15deg)', // Reajusta o texto para ficar horizontal
          textAlign: 'center',
        }}
      >
        {textobotao}
      </span>
    </div>
  );
};

export default Button;

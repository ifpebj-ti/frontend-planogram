'use client';

import React from 'react';
import './style.css';

type TableRow = {
  produto: string;
  quantidade: number;
  saida: number;
};

interface TabelaSProps {
  onClose: () => void;
  data: TableRow[];
  title?: string; 
  slotText?: string;  
  slotId?: number;    
}

const TabelaS: React.FC<TabelaSProps> = ({ onClose, data, title = 'Prateleira', slotText = 'Slot', slotId }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <button className="closeButton" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="tableContainer">
          <div className="tableWrapper">
            {/* 🔹 Mostra o nome do slot e o ID corretamente */}
            <div className="sideText">{slotText} {slotId ?? 'N/A'}</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Qntd.</th>
                  <th>Saída</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.produto}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.saida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer">
          <p>Todos os direitos reservados - Versão 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default TabelaS;


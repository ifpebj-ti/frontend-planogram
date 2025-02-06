'use client';

import React, { useEffect, useState } from 'react';
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
  }

  const TabelaV: React.FC<TabelaSProps> = ({ onClose, data, title = 'Prateleira', slotText = 'Slot' }) => {

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
              <div className="sideText">Slot 001</div>
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

export default TabelaV;

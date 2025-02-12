'use client';

import React from 'react';
import './style.css';
import Footer from '../Footer/Footer';

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
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.produto || "⚠️ Sem Nome"}</td>
                      <td>{item.quantidade || 0}</td>
                      <td>{item.saida || 0}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ textAlign: "center", color: "red" }}>
                      Nenhum produto encontrado
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default TabelaS;


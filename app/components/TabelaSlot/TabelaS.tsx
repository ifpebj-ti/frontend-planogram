"use client";

import React, { useState } from 'react';
import './style.css';
import Footer from '../Footer/Footer';

type TableRow = {
  nome: string;
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
  console.log("📊 Dados recebidos pela TabelaS:", data); 

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Calcular o índice dos produtos que serão exibidos na página atual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

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
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nome || "⚠️ Sem Nome"}</td>  
                      <td>{item.quantidade !== null ? item.quantidade : 0}</td>  
                      <td>{item.saida !== undefined ? item.saida : "N/A"}</td>  
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
          <div className="pagination">
              <button 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} 
                disabled={currentPage === 0}
              >
                ⬅ Página Anterior
              </button>
              
              <span>Página {currentPage + 1} de {Math.ceil(data.length / itemsPerPage)}</span>
              
              <button 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.floor(data.length / itemsPerPage)))} 
                disabled={endIndex >= data.length}
              >
                Próxima Página ➡
              </button>
            </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default TabelaS;



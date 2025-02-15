"use client";

import React, { useState } from "react";
import "./style.css";
import Footer from "../Footer/Footer";

interface TabelaVProps {
  onClose: () => void;
  data: {
    cod_slot: string;
    produto: string;
    quantidade: number | null;
    saida: number | null;
  }[];
  title?: string;
}

const TabelaV: React.FC<TabelaVProps> = ({ onClose, data, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

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
          {paginatedData.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Cod. Slot</th>
                  <th>Produto</th>
                  <th>Qntd.</th>
                  <th>Saída</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.cod_slot || "N/A"}</td>
                    <td>{item.produto || "⚠️ Sem Nome"}</td>
                    <td>{item.quantidade ?? 0}</td>
                    <td>{item.saida ?? "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center py-6" style={{ color: "red" }}>Nenhum produto encontrado</p>
          )}
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

        <Footer />
      </div>
    </div>
  );
};

export default TabelaV;







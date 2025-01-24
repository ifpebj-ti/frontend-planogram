'use client';

import React, { useEffect, useState } from 'react';
import './style.css';
import ButtonV from '../ButtonVisual/ButtonV';

type ShelfData = {
  produto: string;
  quantidade: number;
};

interface ShelfViewProps {
  onClose: () => void;
}

const TabelaAdd: React.FC<ShelfViewProps> = ({ onClose }) => {
  const [data, setData] = useState<ShelfData[]>([]);
  const [loading, setLoading] = useState(true);

  const mockData: ShelfData[] = [
    { produto: 'Produto A', quantidade: 10},
    { produto: 'Produto B', quantidade: 15},
    { produto: 'Produto C', quantidade: 8},
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  function handleRedirect(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <button className="closeButton" onClick={onClose}>
            &times;
          </button>
        </div>
        <h1>Selecione os produtos que deseja adicionar ao slot da prateleira</h1>
        <div className="tableContainer">
          {loading ? (
            <p className="text-center py-6">Carregando...</p>
          ) : (
            <table className="table">
              <thead>
                <tr className="tableHead">
                  <th className="tableCell">Produto</th>
                  <th className="tableCell">Qntd.</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="rowOdd">
                    <td className="tableCell">{item.produto}</td>
                    <td className="tableCell">{item.quantidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="buttonContainer">
          <ButtonV label="+ Adicionar" onClick={handleRedirect} />
        </div>
        <div className="footer">
          <p>Todos os direitos reservados - Versão 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default TabelaAdd;
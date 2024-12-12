'use client';

import React, { useEffect, useState } from 'react';
import './style.css';

type ShelfData = {
  codigoSlot: string;
  produto: string;
  quantidade: number;
  saida: number;
};

interface ShelfViewProps {
  onClose: () => void; 
}

const TabelaV: React.FC<ShelfViewProps> = ({ onClose }) => {
  const [data, setData] = useState<ShelfData[]>([]);
  const [loading, setLoading] = useState(true);

  const mockData: ShelfData[] = [
    { codigoSlot: '0001', produto: 'Produto A', quantidade: 10, saida: 2 },
    { codigoSlot: '0002', produto: 'Produto B', quantidade: 15, saida: 5 },
    { codigoSlot: '0003', produto: 'Produto C', quantidade: 8, saida: 1 },
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

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <button className="closeButton" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="tableContainer">
          {loading ? (
            <p className="text-center py-6">Carregando...</p>
          ) : (
            <table className="table">
              <thead>
                <tr className="tableHead">
                  <th className="tableCell">Cód Slot</th>
                  <th className="tableCell">Produto</th>
                  <th className="tableCell">Qntd.</th>
                  <th className="tableCell">Saída</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className='rowOdd'>
                    <td className="tableCell">{item.codigoSlot}</td>
                    <td className="tableCell">{item.produto}</td>
                    <td className="tableCell">{item.quantidade}</td>
                    <td className="tableCell">{item.saida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="footer">
          <p>Todos os direitos reservados - Versão 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default TabelaV;




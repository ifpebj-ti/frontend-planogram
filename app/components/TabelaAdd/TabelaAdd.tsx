"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import ButtonV from "../ButtonVisual/ButtonV";
import { api } from "../../services/api";
import { useRouter } from "next/navigation";

type Product = {
  produto: string;
  quantidade: number;
};

interface TabelaAProps {
  onClose: () => void;
  categoryId: number | null;
}

const TabelaA: React.FC<TabelaAProps> = ({ onClose, categoryId }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const router = useRouter();

  useEffect(() => {
    if (!categoryId) return; 
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await api.getProductsByShelfId(categoryId);
        console.log("📦 Produtos carregados:", response);
        setData(response);
      } catch (error) {
        console.error("❌ Erro ao buscar produtos:", error);
        setData([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); 

  const handleAddProduct = () => {
    router.push("/importar"); 
  };


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
        <h1>Produtos da Prateleira</h1>

        <div className="tableContainer">
          {loading ? (
            <p className="text-center py-6">Carregando...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr key={`${item.produto}-${index}`}> 
                      <td>{item.produto}</td>
                      <td>{item.quantidade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} style={{ textAlign: "center", color: "red" }}>
                      Nenhum produto encontrado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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

        <div className="buttonContainer">
          <ButtonV label="+ Adicionar" onClick={handleAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default TabelaA;




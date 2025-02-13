"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";
import Button from "../../components/Button/Button";
import SideNavBar from "../../components/SideNavBar";
import ButtonV from "../../components/ButtonVisual/ButtonV";
import TabelaA from "../../components/TabelaAdd/TabelaAdd"; 
import { api } from "../../services/api";
import router from "next/router";
import { IoIosArrowDropleftCircle } from "react-icons/io";

interface Shelf {
  id: number;
  nome: string;
  produtos: { id: number; nome: string; quantidade: number }[];
}

export default function EditarPratileira() {
  return (
    <Suspense fallback={<p>🔄 Carregando edição da prateleira...</p>}>
      <EditarPratileiraContent />
    </Suspense>
  );
}

function EditarPratileiraContent() {
  const searchParams = useSearchParams();
  const prateleiraId = searchParams.get("id");

  const [shelf, setShelf] = useState<Shelf | null>(null);
  const [isTabelaOpen, setIsTabelaOpen] = useState(false);
  const [shelves, setShelves] = useState<string[][]>([
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty"],
  ]);

  useEffect(() => {
    if (prateleiraId) {
      const fetchShelfData = async () => {
        try {
          const response = await api.get<Shelf>(`shelves/${prateleiraId}`);
          setShelf(response);

          // Atualiza os slots com os produtos existentes
          const updatedShelves = shelves.map((row, rowIdx) =>
            row.map((_, colIdx) =>
              response.produtos[rowIdx * row.length + colIdx]?.nome || "empty"
            )
          );
          setShelves(updatedShelves);
        } catch (error) {
          console.error("Erro ao buscar prateleira:", error);
        }
      };

      fetchShelfData();
    }
  }, [prateleiraId]);

  const limparPratileira = () => {
    setShelves(shelves.map((row) => row.map(() => "empty")));
  };

  const adicionarItem = () => {
    setIsTabelaOpen(true);
  };

  const removerItem = (rowIdx: number, colIdx: number) => {
    const updatedShelves = [...shelves];
    updatedShelves[rowIdx][colIdx] = "empty";
    setShelves(updatedShelves);
  };

  const fecharTabela = () => {
    setIsTabelaOpen(false);
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Editar {shelf ? `${shelf.nome}` : "Carregando..."}</h1>

        <div className="centro">
          <div className="pratileira">
            <div
              style={{
                width: '500px',
                height: '600px',
                backgroundImage: `url('/estante.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                padding: '5%',
              }}
            >
              <div className=".shelf-slot">
                {shelves.map((row, rowIdx) => (
                  <div key={rowIdx} style={{ display: "flex", gap: "20px", marginTop: "20px", alignContent: "center", marginLeft: "4%" }}>
                    {row.map((slot, colIdx) => (
                      <Button
                        key={`${rowIdx}-${colIdx}`}
                        textobotao={slot === "empty" ? "+" : slot}
                        corDeFundo={slot === "empty" ? "#CCCCCC" : "#A8F0A4"}
                        pressione={slot === "empty" ? adicionarItem : () => removerItem(rowIdx, colIdx)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#EFF0F0",
                padding: "10px",
              }}
            >
              <div className="button-clear">
                <ButtonV label="Limpar" onClick={limparPratileira} />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">Todos os direitos reservados - Versão 1.0</footer>
      </main>

      {isTabelaOpen && <TabelaA onClose={fecharTabela} />}
    </div>
  );
}










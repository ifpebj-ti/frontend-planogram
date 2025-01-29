'use client';

import React, { useState } from "react";
import "./style.css";
import Button from "../../components/Button/Button";
import SideNavBar from "../../components/SideNavBar";
import ButtonV from "../../components/ButtonVisual/ButtonV";
import TabelaA from "../../components/TabelaAdd/TabelaAdd"; // Importa o componente da tabela

export default function EditarPrateleira() {
  const [shelves, setShelves] = useState([
    ["item", "item", "item", "item"],
    ["item", "item", "item", "item"],
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty"],
  ]);

  const [isTabelaOpen, setIsTabelaOpen] = useState(false); // Estado para controlar a exibição da tabela

  const limparPrateleira = () => {
    setShelves(shelves.map((row) => row.map(() => "empty")));
  };

  const adicionarItem = () => {
    setIsTabelaOpen(true); // Abre o componente da tabela
  };

  const removerItem = (rowIdx: number, colIdx: number) => {
    const updatedShelves = [...shelves];
    updatedShelves[rowIdx][colIdx] = "empty";
    setShelves(updatedShelves);
  };

  const fecharTabela = () => {
    setIsTabelaOpen(false); // Fecha o componente da tabela
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
        <h1>Editar Prateleira 1</h1>
        <div className="pratileira-container">
          <div className="pratileira">
            {shelves.map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: "flex",
                  position: "absolute",
                  top: `${rowIdx * 110}px`,
                  left: "10px",
                  gap: "50px",
                  height: "6%",
                  marginTop: "10%",
                  width: "5%",
                }}
              >
                {row.map((slot, colIdx) => (
                  <div className="shelf-slot" key={colIdx}>
                    {slot === "item" ? (
                      <Button
                        textobotao="🗑️"
                        corDeFundo="#FFCCCC"
                        pressione={() => removerItem(rowIdx, colIdx)}
                      />
                    ) : (
                      <Button
                        textobotao="+"
                        corDeFundo="#CCCCCC"
                        pressione={adicionarItem} // Abre a tabela ao clicar
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="botao-limpar">
            <ButtonV label="Limpar" onClick={limparPrateleira} />
          </div>
        </div>

        <footer className="footer">
          Todos os direitos reservados - Versão 1.0
        </footer>
      </main>

      {isTabelaOpen && <TabelaA onClose={fecharTabela} />}
    </div>
  );
}







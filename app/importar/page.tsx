"use client";

import React, { useState } from "react";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { CiImport } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import { api } from "../services/api"; // Importando API

export default function Importar() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Nenhum arquivo selecionado.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    setLoading(true);
  
    try {
      const response = await api.uploadFile("produtos/upload-planilha", formData);
      alert(`✅ Arquivo ${file.name} enviado com sucesso!`);
      console.log("Resposta da API:", response);
    } catch (error) {
      alert("Erro ao enviar o arquivo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleCancel = () => {
    setFile(null);
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
        <CiImport style={{ width: "100px", height: "200px", color: "#21557A" }} />
        <p>
          Selecione o arquivo XML com as informações referentes ao movimento de produtos do seu estoque.
        </p>

        <div className="upload-container">
          <div className="file-input">
            <label htmlFor="fileUpload" className="file-label">
              Selecionar arquivo XML
            </label>
            <input
              id="fileUpload"
              type="file"
              accept=".xml,.csv"
              onChange={handleFileChange}
            />
            {file && <span className="file-name">{file.name}</span>} {/* Exibir nome do arquivo */}
          </div>

          <div className="button-group">
            <button className="cancel-button" onClick={handleCancel} disabled={loading}>
              Cancelar
            </button>
            <button className="upload-button" onClick={handleUpload} disabled={loading}>
              {loading ? "Enviando..." : "Fazer Upload"}
            </button>
          </div>
        </div>

        <footer className="footer">
          <FaRegCopyright />Todos os direitos reservados - Versão 1.0
        </footer>
      </main>
    </div>
  );
}


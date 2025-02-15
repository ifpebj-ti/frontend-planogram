"use client";

import React, { useRef, useState } from "react";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { FaArrowDown, FaRegCopyright } from "react-icons/fa";
import { api } from "../services/api"; // Importando API corretamente

export default function Importar() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("❌ Nenhum arquivo selecionado.");
      return;
    }
  
    setLoading(true);
  
    try {
      console.log("📡 Enviando arquivo para o backend...");
      console.log("📂 Nome do arquivo:", file.name);
  
      const token = localStorage.getItem("token");
      if (!token) {
        alert("❌ Usuário não autenticado. Faça login novamente.");
        return;
      }
  
      const result = await api.uploadPlanilha(file);
      console.log("📡 Resposta completa do backend:", result);
  
      alert(`✅ Arquivo "${file.name}" enviado com sucesso!`);
    } catch (error: any) {
      console.error("❌ Erro ao enviar arquivo:", error.message || error);
      alert(`Erro ao enviar o arquivo: ${error.message}`);
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
        <FaArrowDown style={{ width: "100px", height: "200px", color: "#21557A" }} />
        <p>
          Selecione o arquivo XML com as informações referentes ao movimento de produtos do seu estoque.
        </p>

        <div className="upload-container">
          <div className="file-input">
            <label htmlFor="fileUpload" className="importar-file-label">
              Selecionar arquivo XML
            </label>
            <input
              id="fileUpload"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            {file ? <span className="file-name">{file.name}</span> : <span className="file-name">Nenhum arquivo selecionado</span>}
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

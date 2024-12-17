"use client";

import { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import { FaArrowDown } from "react-icons/fa";
import "./style.css";

export default function ImportarPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".xlsx")) {
      setFile(selectedFile);
      setUploadMessage("");
    } else {
      setFile(null);
      setUploadMessage("Por favor, selecione um arquivo Excel válido (.xlsx).");
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Arquivo carregado:", file.name);
      setUploadMessage(`Arquivo "${file.name}" carregado com sucesso!`);
    } else {
      setUploadMessage("Nenhum arquivo foi selecionado.");
    }
  };

  const handleCancel = () => {
    setFile(null);
    setUploadMessage("");
  };

  return (
    <div className="importar-page">
      <SideNavBar />
      <div className="importar-content">
        <FaArrowDown className="importar-icon" />

        <p className="importar-instructions">
          Selecione o arquivo Excel (.xlsx) com as informações referentes ao
          movimento de produtos do seu estoque
        </p>

        <div className="importar-file-box">
          <input
            type="file"
            id="fileInput"
            className="importar-file-input"
            accept=".xlsx"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className="importar-file-label">
            Selecionar arquivo Excel
          </label>
          {file && (
            <p
              style={{
                marginTop: "1rem",
                color: "#003b68",
                fontWeight: "bold",
              }}
            >
              Arquivo selecionado: {file.name}
            </p>
          )}
        </div>

        <div className="importar-button-group">
          <button className="importar-button cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="importar-button upload" onClick={handleUpload}>
            Fazer Upload
          </button>
        </div>

        {uploadMessage && (
          <p
            style={{
              marginTop: "1rem",
              color: uploadMessage.includes("sucesso") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {uploadMessage}
          </p>
        )}

        <footer className="importar-footer">
          &copy; Todos os direitos reservados - Versão 1.0
        </footer>
      </div>
    </div>
  );
}
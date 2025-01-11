'use client';
import React, { useState } from "react";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { CiImport } from "react-icons/ci";

export default function importar() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      alert(`Arquivo ${file.name} enviado com sucesso!`);
      
    } else {
      alert("Nenhum arquivo selecionado.");
    }
  };

  const handleCancel = () => {
    setFile(null);
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
      <CiImport style={{
            width: '100px', 
            height: '200px', 
            color: '#21557A',
        }}/>
        <p>
            Selecione o arquivo XML com as informações referentes ao movimento
            de produtos do seu estoque
          </p>

        <div className="upload-container">
          <div className="file-input">
            <label htmlFor="fileUpload" className="file-label">
              Selecionar arquivo XML
            </label>
            <input
              id="fileUpload"
              type="file"
              accept=".xml"
              onChange={handleFileChange}
            />
          </div>

          <div className="button-group">
            <button className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="upload-button" onClick={handleUpload}>
              Fazer Upload
            </button>
          </div>
        </div>

        <footer className="footer">
          Todos os direitos reservados - Versão 1.0
        </footer>
      </main>
    </div>
  );
}

